#!/usr/bin/env node
/**
 * @license MIT
 * ============================================================================
 * scripts/prerender.mjs — Static Site Generator, OpenGraph & Umbrella llms.txt
 * Property: https://raggiesoft.dev
 * ============================================================================
 * PLAIN-ENGLISH OVERVIEW (100-LEVEL NODE.JS SSG BUILD SCRIPT):
 *   Pre-renders all 4 developer hub routes (`/`, `/repositories`, `/ai-skills`,
 *   `/notes`) + `/404.html`, enforces `<= 60` char `<title>` & `<= 155` char
 *   `<meta description>`, generates `dist/llms.txt` indexing RaggieSoft's
 *   open-source ecosystem & AI skills, and writes `sitemap.xml` + `robots.txt`.
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
const ssrDir = path.join(projectRoot, '.ssr-temp');

const SITE_ORIGIN = 'https://raggiesoft.dev';
const OG_IMAGE = 'https://assets.raggiesoft.com/raggiesoft-corporate/images/logos/logo-michael.png';
const FAVICON_SVG = 'https://assets.raggiesoft.com/raggiesoft-a11y-studio/images/studio-logo.svg';
const INDEXNOW_KEY = '726167676965736f6674696e6465786e';

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

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
    name: 'raggiesoft.dev — RaggieSoft Open-Source & App Engineering Hub',
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
    `<meta property="og:image:alt" content="raggiesoft.dev — RaggieSoft Open-Source Software, Compilers & AI Skills" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(seoTitle)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(seoDescription)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(OG_IMAGE)}" />`,
    `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`
  ].join('\n    ');
}

async function main() {
  const viteBin = path.join(projectRoot, 'node_modules', 'vite', 'bin', 'vite.js');
  execFileSync(
    process.execPath,
    [viteBin, 'build', '--ssr', 'src/entry-server.ts', '--outDir', '.ssr-temp'],
    { cwd: projectRoot, stdio: 'inherit' }
  );

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
      const subName = route.path.replace(/^\/+/, '');
      const routeFolder = path.join(distDir, subName);
      fs.mkdirSync(routeFolder, { recursive: true });
      fs.writeFileSync(path.join(routeFolder, 'index.html'), finalPage, 'utf8');
      fs.writeFileSync(path.join(distDir, `${subName}.html`), finalPage, 'utf8');
    }
  }

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

  // Emit umbrella `dist/llms.txt` linking all RaggieSoft open-source suites & AI agent specs
  const devLlmsTxt = [
    '# RaggieSoft Open-Source & App Engineering Hub (https://raggiesoft.dev)',
    '',
    '> Official engineering portal indexing RaggieSoft open-source compilers, accessibility IDEs, zero-database web frameworks, and AI agent skills (MIT License).',
    '',
    '## Flagship Developer Suites & Portals',
    '- [RaggieSoft Installer Studio](https://raggiesoftstudio.com): Zero-dependency native Win32 C++20 Windows packaging suite (`InstallerStudio.exe`, `instbuild.exe`, `SetupWizard.exe`, `msiprism.exe`) compiling `.rsip` projects and `.rsis` suites into `.msi`, `.msm`, `.mst`, `.msp`, and VPAT 2.5 reports across x64 & ARM64.',
    '- [RaggieSoft Accessibility Studio](https://a11y.raggiesoft.com): C# / .NET 10 WinForms + Monaco WebView2 WCAG 2.2 AA & Section 508 workstation IDE + SARIF 2.1.0 CLI.',
    '- [RaggieSoft Launcher & Native Apps](https://launcher.raggiesoft.com): 100% offline-ready Windows (.NET 10 WPF) and Apple (SwiftUI) desktop/mobile suite.',
    '',
    '## AI Agent Skills & Machine-Readable Endpoints',
    '- [Installer Studio Summary Spec](https://raggiesoftstudio.com/llms.txt)',
    '- [Installer Studio Full Schema Reference](https://raggiesoftstudio.com/llms-full.txt)',
    '- [Installer Studio Agent Skill (SKILL.md)](https://raggiesoftstudio.com/SKILL.md)',
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

  const today = new Date().toISOString().slice(0, 10);
  const sitemapXml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...DEV_ROUTES.map((r) => {
      const loc = r.path === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${r.path}`;
      const priority = r.path === '/' ? '1.0' : '0.8';
      return `  <url><loc>${loc}</loc><lastmod>${today}</lastmod><priority>${priority}</priority></url>`;
    }),
    '</urlset>',
    ''
  ].join('\n');
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf8');
  fs.writeFileSync(path.join(distDir, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`, 'utf8');
  fs.writeFileSync(path.join(distDir, `${INDEXNOW_KEY}.txt`), `${INDEXNOW_KEY}\n`, 'utf8');

  fs.rmSync(ssrDir, { recursive: true, force: true });
  console.log(`[prerender] Pre-rendered ${DEV_ROUTES.length} routes + /llms.txt + sitemap.xml for ${SITE_ORIGIN}`);
}

main().catch((err) => {
  console.error('[prerender] Fatal error:', err);
  process.exit(1);
});
