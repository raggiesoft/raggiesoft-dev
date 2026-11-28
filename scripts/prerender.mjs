#!/usr/bin/env node
/**
 * @license MIT
 * ============================================================================
 * scripts/prerender.mjs — Static Site Generator, OpenGraph, Labs & Umbrella llms.txt
 * Property: https://raggiesoft.dev
 * ============================================================================
 * PLAIN-ENGLISH OVERVIEW (100-LEVEL NODE.JS SSG BUILD SCRIPT):
 *   1. Pre-renders all 6 developer hub routes (`/`, `/labs`, `/labs/finsharp`,
 *      `/repositories`, `/ai-skills`, `/notes`) + `/404.html` into static HTML5,
 *      creating nested directories cleanly for `/labs/finsharp`.
 *   2. Enforces `<= 60` char `<title>` & `<= 155` char `<meta description>` SEO
 *      bounds and emits OpenGraph, Twitter Card, and Schema.org JSON-LD tags.
 *   3. Publishes `/labs/finsharp/llms-finsharp.txt` from `llms/llms-finsharp.txt`
 *      and writes the umbrella `dist/llms.txt` in 1:1 lockstep with
 *      `https://raggiesoftstudio.com`, plus `sitemap.xml`, `robots.txt`, & IndexNow.
 * ============================================================================
 */

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const buildSubdomainsDir = path.join(projectRoot, 'build');
const ssrDir = path.join(projectRoot, '.ssr-temp');
const workspaceLlmsDir = path.resolve(projectRoot, '../../../llms');
const desktopAppsDir = path.resolve(projectRoot, '../../../desktop-apps');

/**
 * Recursively mirrors a Help Studio `out/web` static portal directory into
 * `build/<subdomain>/` so `sarah-deploy.sh` can `rsync` `<subdomain>.raggiesoft.dev`
 * straight into `/var/www/<subdomain>.raggiesoft.dev` with zero extra Git repos!
 */
function syncCleanDirectory(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return false;
  fs.rmSync(destDir, { recursive: true, force: true });
  fs.mkdirSync(destDir, { recursive: true });
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      syncCleanDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
  return true;
}

const SITE_ORIGIN = 'https://raggiesoft.dev';
const OG_IMAGE = 'https://assets.raggiesoft.com/raggiesoft-studio/boxes/og-raggiesoft-studio-suite.jpg';
const FAVICON_SVG = 'https://assets.raggiesoft.com/raggiesoft-studio/logo/raggiesoft-studio-logo.svg';
const INDEXNOW_KEY = '726167676965736f6674696e6465786e';

/**
 * Escapes HTML special characters for safe attribute and `<title>` interpolation.
 */
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Validates SEO bounds and emits `<head>` meta + Schema.org JSON-LD (zero JSON comments).
 */
function buildSeoHead({ seoTitle, seoDescription, canonicalUrl, noindex = false }) {
  if (seoTitle.length > 60) {
    throw new Error(`SEO Title exceeds 60 chars (${seoTitle.length}): "${seoTitle}"`);
  }
  if (seoDescription.length > 155) {
    throw new Error(`SEO Description exceeds 155 chars (${seoDescription.length}): "${seoDescription}"`);
  }

  const robots = noindex ? 'noindex,follow' : 'index,follow';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'raggiesoft.dev — RaggieSoft Open-Source, Studio & Compiler Engineering Hub',
    url: `${SITE_ORIGIN}/`,
    author: {
      '@type': 'Person',
      name: 'Michael P. Ragsdale',
      url: 'https://michaelpragsdale.com'
    }
  };

  return [
    `<title>${escapeHtml(seoTitle)}</title>`,
    `<meta name="description" content="${escapeHtml(seoDescription)}" />`,
    `<meta name="robots" content="${robots}" />`,
    ...(noindex ? [] : [`<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`]),
    `<link rel="icon" type="image/svg+xml" href="${escapeHtml(FAVICON_SVG)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="raggiesoft.dev" />`,
    `<meta property="og:title" content="${escapeHtml(seoTitle)}" />`,
    `<meta property="og:description" content="${escapeHtml(seoDescription)}" />`,
    `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`,
    `<meta property="og:image" content="${escapeHtml(OG_IMAGE)}" />`,
    `<meta property="og:image:alt" content="raggiesoft.dev — RaggieSoft Open-Source Compilers, 8-Tool Studio Suite, Fin# Labs & AI Skills" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(seoTitle)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(seoDescription)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(OG_IMAGE)}" />`,
    `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`
  ].join('\n    ');
}

async function main() {
  // 1. Compile SSR route entry via local Vite binary.
  const viteBin = path.join(projectRoot, 'node_modules', 'vite', 'bin', 'vite.js');
  execFileSync(
    process.execPath,
    [viteBin, 'build', '--ssr', 'src/entry-server.ts', '--outDir', '.ssr-temp'],
    { cwd: projectRoot, stdio: 'inherit' }
  );

  // 2. Render every route in `DEV_ROUTES` (`/`, `/labs`, `/labs/finsharp`, etc.) to static HTML5.
  const templateHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
  const ssrEntryUrl = pathToFileURL(path.join(ssrDir, 'entry-server.js')).href;
  const { renderDevPage, DEV_ROUTES } = await import(ssrEntryUrl);

  for (const route of DEV_ROUTES) {
    const { html } = renderDevPage(route.path);
    const canonicalUrl = route.path === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${route.path}`;
    const headMarkup = buildSeoHead({
      seoTitle: route.seoTitle,
      seoDescription: route.seoDescription,
      canonicalUrl,
      noindex: false
    });

    const finalPage = templateHtml
      .replace('<!--SSR_HEAD-->', headMarkup)
      .replace('<!--SSR_OUTLET-->', html);

    if (route.path === '/') {
      fs.writeFileSync(path.join(distDir, 'index.html'), finalPage, 'utf8');
    } else {
      const subName = route.path.replace(/^\/+/, '').replace(/\/+$/, '');
      const routeFolder = path.join(distDir, subName);
      const htmlFilePath = path.join(distDir, `${subName}.html`);
      fs.mkdirSync(routeFolder, { recursive: true });
      fs.mkdirSync(path.dirname(htmlFilePath), { recursive: true });
      fs.writeFileSync(path.join(routeFolder, 'index.html'), finalPage, 'utf8');
      fs.writeFileSync(htmlFilePath, finalPage, 'utf8');
    }
  }

  // 3. Emit genuine `/404.html` (`noindex,follow`) for Nginx `error_page 404 /404.html`.
  const notFoundRender = renderDevPage('/404');
  const notFoundHead = buildSeoHead({
    seoTitle: '404 Not Found | raggiesoft.dev',
    seoDescription: 'The requested raggiesoft.dev developer resource could not be found.',
    canonicalUrl: `${SITE_ORIGIN}/404`,
    noindex: true
  });
  fs.writeFileSync(
    path.join(distDir, '404.html'),
    templateHtml.replace('<!--SSR_HEAD-->', notFoundHead).replace('<!--SSR_OUTLET-->', notFoundRender.html),
    'utf8'
  );

  // 4. Copy `llms/llms-finsharp.txt` into `dist/labs/finsharp/llms-finsharp.txt` for cold-start AI sessions.
  const finSharpSpecSrc = path.join(workspaceLlmsDir, 'llms-finsharp.txt');
  if (fs.existsSync(finSharpSpecSrc)) {
    const finSharpOutDir = path.join(distDir, 'labs', 'finsharp');
    fs.mkdirSync(finSharpOutDir, { recursive: true });
    fs.copyFileSync(finSharpSpecSrc, path.join(finSharpOutDir, 'llms-finsharp.txt'));
  }

  const rsscSpecSrc = path.join(workspaceLlmsDir, 'llms-raggiescript.txt');
  if (fs.existsSync(rsscSpecSrc)) {
    const rsscOutDir = path.join(distDir, 'raggiescript');
    fs.mkdirSync(rsscOutDir, { recursive: true });
    fs.copyFileSync(rsscSpecSrc, path.join(rsscOutDir, 'llms-raggiescript.txt'));
  }

  // 4B. Stage Help Studio v0.6.0 standalone `*.raggiesoft.dev` portals into `build/{raggiescript,finsharp}`!
  const rsscWebSrc = path.join(desktopAppsDir, 'raggiescript', 'help', 'out', 'web');
  const rsscSubOut = path.join(buildSubdomainsDir, 'raggiescript');
  if (syncCleanDirectory(rsscWebSrc, rsscSubOut)) {
    const rsscVpat = path.join(desktopAppsDir, 'raggiescript', 'help', 'out', 'raggiescript-help-vpat-2.5.html');
    if (fs.existsSync(rsscVpat)) {
      fs.copyFileSync(rsscVpat, path.join(rsscSubOut, 'vpat-2.5.html'));
    }
  }

  const finWebSrc = path.join(desktopAppsDir, 'finsharp', 'help', 'out', 'web');
  const finSubOut = path.join(buildSubdomainsDir, 'finsharp');
  if (syncCleanDirectory(finWebSrc, finSubOut)) {
    const finVpat = path.join(desktopAppsDir, 'finsharp', 'help', 'out', 'fin-financial-sharp-help-vpat-2.5.html');
    if (fs.existsSync(finVpat)) {
      fs.copyFileSync(finVpat, path.join(finSubOut, 'vpat-2.5.html'));
    }
  }

  // 5. Emit umbrella `dist/llms.txt` in 1:1 lockstep with `raggiesoftstudio.com` & `*.raggiesoft.dev`.
  const devLlmsTxt = [
    '# RaggieSoft Open-Source Code, Compilers & Studio Engineering Hub (https://raggiesoft.dev)',
    '',
    '> Official open-source code portal behind RaggieSoft projects (100% MIT License for code; CC BY-SA 4.0 for creative works), indexing `*.raggiesoft.dev` language portals, RaggieSoft Studio (8 Windows 11 x64 & ARM64 developer tools), and AI agent skills.',
    '',
    '## Dedicated `*.raggiesoft.dev` Language & Documentation Portals (Dogfooded via Help Studio v0.6.0)',
    '- [RaggieScript v1.3 Complete Language & API Portal](https://raggiescript.raggiesoft.dev): Every function, property, global constant, `defer`, `?.`, `raggiescript.exe test`, 23-method zero-DLL `archive.*` suite (`.7z`/`LZMA2`, `.zip`, `.rswpak`, `.cab`, `.tar.zst`, `.iso`, `.wim`), Reg-Free COM `com.generateRegFreeManifest`, `StoreScript` (`use storescript;` for StoreTrainer), `Story Crossroads` (`use crossroads;`), two-way `.NET` Host SDK (`RaggieScript.Core`), `RSWBC2` opcode, and `RSW700`-`RSW715` diagnostic across all 31 namespaces ([Portal llms.txt](https://raggiescript.raggiesoft.dev/llms.txt) | [Full Reference llms-full.txt](https://raggiescript.raggiesoft.dev/llms-full.txt)).',
    '- [Fin# (Financial Sharp) Language & Conservation Portal](https://finsharp.raggiesoft.dev): Linear-type double-entry financial language (`Capital<T>`, `FIN0001`-`FIN0005`) with bidirectional narrative links to *The Eleventh Child* (`https://books.raggiesoft.com/aubrie`) ([Portal llms.txt](https://finsharp.raggiesoft.dev/llms.txt) | [Full Reference llms-full.txt](https://finsharp.raggiesoft.dev/llms-full.txt)).',
    '',
    '## RaggieSoft Studio — 8-Product Suite (`Community == 100% Architect Parity`, `Essentials`, `Developer`, `Architect`)',
    '- [RaggieSoft Studio Suite Portal](https://raggiesoftstudio.com): Umbrella portal for all 8 Studio tools + All-Access Studio Suites (including free Studio Community).',
    '- [Suite-Wide Editions Matrix](https://raggiesoftstudio.com/editions)',
    '- [RaggieScript v1.3 (.rssc) Language Hub, StoreScript & Two-Way .NET Host SDK](https://raggiesoftstudio.com/raggiescript): Gradual static type binder (`struct`, `enum`, `match`, `=>` closures, `defer`, `?.`, `raggiescript.exe test`, `RSW701`-`RSW715`), `RSWBC2` SHA-256 linear stack bytecode VM, 31 built-in namespaces (incl. `StoreScript` & `Story Crossroads`), 23-method zero-DLL `archive.*` engine, declarative Win32 Wizard UI engine, `fmt`, JSON-RPC 2.0 `lsp`, two-way `.NET` Host SDK (`RaggieScript.Core`), and zero-`eval()` `ES2022` ([Full Docs](https://raggiescript.raggiesoft.dev) | [Cold-Start Spec](https://raggiesoft.dev/raggiescript/llms-raggiescript.txt)).',
    '- [1. RaggieSoft Installer Studio (v0.8.0 Shipping)](https://raggiesoftstudio.com/installer-studio): Static `/MT` Win32 C++20 `.msi`, `.msm`, `.mst`, `.msp`, `sfx` (`rswsfx.exe`), **RaggieScript EXE**, `RsPatch.exe` (`msdelta.dll` `.msp` & `.rswpatch` binary deltas), DRY `RsUpdate.exe` (`apps-manifest.json`), `[Upgrade]` + `--plan-update`, shared cross-Studio 2D visual dialog designers (`RaggieSoftVisualCanvas.hpp`), turnkey `RsDialog` wizard suite, standalone read/write **RaggieSoft MSI Prism (`msiprism.exe`)**, & Monotonic Dual-Bar `.rsis` Suite compiler ([Suite Downloads](https://raggiesoftstudio.com/download) | [Previous Versions](https://raggiesoftstudio.com/download/previous-versions)).',
    '- [2. RaggieSoft Showcase Studio](https://raggiesoftstudio.com/showcase-studio): 1990s `.BMP` (with UIA safeguards) & Windows 11 `FluentMica` launchpads + bespoke `_support\\` self-extracting canvas installers.',
    '- [3. RaggieSoft Launcher Studio](https://raggiesoftstudio.com/launcher-studio): Branded zero-account desktop hubs & SHA-256 + Authenticode static-CDN updaters.',
    '- [4. RaggieSoft Help Studio (v0.6.0)](https://raggiesoftstudio.com/help-studio): Static `/MT` Win32 C++20 `.CHM` (`ITSF/LZX`) & WinHelp `.HLP`/`.CNT` (`LZ77`) decompiler, Word `MsoNormal` sanitizer, standalone `learn.microsoft.com`-grade website exporter, & `<5ms` Named Pipe `F1` help suite (`rshbuild.exe`, `HelpStudio.exe`, `RaggieSoftHelp.exe`).',
    '- [5. RaggieSoft Training Studio (v0.5.0)](https://raggiesoftstudio.com/training-studio): `<50 KB` proxy-proof WCAG 2.2 AA SCORM 1.2 & 2004 compiler (`rstbuild`).',
    '- [6. RaggieSoft Document Studio](https://raggiesoftstudio.com/document-studio): Deterministic ISO 14289-1 Tagged `PDF/UA-1` & Section 508 form compiler.',
    '- [7. RaggieSoft Localization Studio](https://raggiesoftstudio.com/localization-studio): Multilingual `.RESX`, `XLIFF 2.1`, `.rsip`, `.rstp` & `<=22 CPS` WebVTT compliance IDE.',
    '- [8. RaggieSoft Accessibility Studio (v1.0.0)](https://raggiesoftstudio.com/accessibility-studio): `.NET 11` + Monaco WCAG 2.2 AA refactoring IDE & SARIF 2.1.0 CLI (`a11y.raggiesoft.com` 301s here).',
    '',
    '## RaggieSoft Labs (`/labs` & `/labs/finsharp`)',
    '- [RaggieSoft Labs Overview](https://raggiesoft.dev/labs)',
    '- [Fin# (Financial Sharp) Compiler Lab](https://raggiesoft.dev/labs/finsharp): Linear-type double-entry financial programming language enforcing conservation of capital at compile time (`FIN0001`).',
    '- [Fin# Cold-Start Compiler Blueprint](https://raggiesoft.dev/labs/finsharp/llms-finsharp.txt)',
    '',
    '## AI Agent Skills & Machine-Readable Endpoints',
    '- [8-Tool Studio Suite Summary](https://raggiesoftstudio.com/llms.txt)',
    '- [Installer Studio Full Schema Reference](https://raggiesoftstudio.com/installer-studio/llms-full.txt)',
    '- [Installer Studio Agent Skill (SKILL.md)](https://raggiesoftstudio.com/installer-studio/SKILL.md)',
    '- [Help Studio Full Schema Reference](https://raggiesoftstudio.com/help-studio/llms-full.txt)',
    '- [Help Studio Agent Skill (SKILL.md)](https://raggiesoftstudio.com/help-studio/SKILL.md)',
    '- [Training Studio Full Schema Reference](https://raggiesoftstudio.com/training-studio/llms-full.txt)',
    '',
    '## Public GitHub Repositories (@raggiesoft)',
    '- https://github.com/raggiesoft/installer-studio',
    '- https://github.com/raggiesoft/accessibility-studio',
    '- https://github.com/raggiesoft/stardust-engine-cms',
    '- https://github.com/raggiesoft/storetrainer',
    '- https://github.com/raggiesoft/raggiesoft-deployment-tools',
    ''
  ].join('\n');
  fs.writeFileSync(path.join(distDir, 'llms.txt'), devLlmsTxt, 'utf8');

  // 6. Emit `sitemap.xml`, `robots.txt`, and IndexNow verification file.
  const today = new Date().toISOString().slice(0, 10);
  const sitemapXml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...DEV_ROUTES.map((r) => {
      const loc = r.path === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${r.path}`;
      const priority = r.path === '/' ? '1.0' : r.path.startsWith('/labs') ? '0.9' : '0.8';
      return `  <url><loc>${loc}</loc><lastmod>${today}</lastmod><priority>${priority}</priority></url>`;
    }),
    '</urlset>',
    ''
  ].join('\n');
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf8');
  fs.writeFileSync(path.join(distDir, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`, 'utf8');
  fs.writeFileSync(path.join(distDir, `${INDEXNOW_KEY}.txt`), `${INDEXNOW_KEY}\n`, 'utf8');

  fs.rmSync(ssrDir, { recursive: true, force: true });
  console.log(`[prerender] Pre-rendered ${DEV_ROUTES.length} routes + /labs/finsharp/llms-finsharp.txt + /llms.txt + sitemap.xml for ${SITE_ORIGIN}`);
}

main().catch((err) => {
  console.error('[prerender] Fatal error:', err);
  process.exit(1);
});
