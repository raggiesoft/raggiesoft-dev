/**
 * ============================================================================
 * FILE: src/routes.ts
 * PROPERTY: https://raggiesoft.dev (RaggieSoft Developer & Open-Source Hub)
 * STACK: Alpine.js 3 + TypeScript + Vite Static SSG
 * LICENSE: MIT License (Copyright (c) 2026 Michael P. Ragsdale / RaggieSoft)
 * ============================================================================
 * PLAIN-ENGLISH OVERVIEW FOR 100-LEVEL READERS:
 *   Defines the 4 canonical developer routes for `https://raggiesoft.dev`:
 *     1. `/`             — Full RaggieSoft App & Open-Source Engineering Umbrella
 *     2. `/repositories` — Public GitHub Repositories (`@raggiesoft`, MIT License)
 *     3. `/ai-skills`    — `llms.txt`, `llms-full.txt`, & `SKILL.md` Agent Endpoints
 *     4. `/notes`        — Engineering Notes & Systems Architecture Blog
 * ============================================================================
 */

export interface DevRoute {
  readonly path: string;
  readonly navLabel: string;
  readonly seoTitle: string;       // <= 60 characters
  readonly seoDescription: string; // <= 155 characters
  readonly renderBody: () => string;
}

const FICTITIOUS_DISCLAIMER =
  'Fictitious Persons & Entities Disclaimer: All narrative characters, bands (including The Stardust Engine), biographies, universities (including Commonwealth Polytechnic Institute / CPI, Virginia Dominion University / VDU, The Forgers, and The Crucible), corporations (including OmniCorp, Apex Records, Prairie Coachworks, and Sainte-Claire), transit agencies (BRT and CVTA), in-universe legal filings, and events across RaggieSoft creative works are works of fiction. In real life, RaggieSoft, RaggieSoft Media, Engine Room Records, Ocean View Archives, and RaggieSoft Story Crossroads are unincorporated creative imprints of Michael P. Ragsdale.';

function renderHomeBody(): string {
  return `
    <section class="hero" aria-labelledby="dev-hero">
      <span class="eyebrow">Open-Source Software • Native Toolchains • AI Agent Specs</span>
      <h1 id="dev-hero">raggiesoft.dev — Software &amp; Systems Engineering Hub</h1>
      <p class="lead">
        Explore RaggieSoft's open-source developer tools, native desktop suites, zero-database web frameworks,
        and deterministic AI agent specifications (<code>llms.txt</code> &amp; <code>SKILL.md</code>)—engineered with
        100-level read-along source comments and WCAG 2.2 AA accessibility.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="https://github.com/raggiesoft">Explore GitHub (@raggiesoft)</a>
        <a class="btn btn-outline" href="https://raggiesoftstudio.com">RaggieSoft Installer Studio</a>
        <a class="btn btn-outline" href="/ai-skills">Browse llms.txt &amp; Agent Skills</a>
      </div>
    </section>

    <section aria-labelledby="projects-heading" x-data="{ filter: 'all' }">
      <h2 id="projects-heading">Flagship Engineering Suites &amp; Platforms</h2>
      <div class="btn-row" style="margin-bottom: 1.25rem;" role="group" aria-label="Filter Projects by Discipline">
        <button type="button" class="btn" :class="filter === 'all' ? 'btn-primary' : 'btn-outline'" @click="filter = 'all'">All Efforts</button>
        <button type="button" class="btn" :class="filter === 'desktop' ? 'btn-primary' : 'btn-outline'" @click="filter = 'desktop'">Native Desktop &amp; Packaging</button>
        <button type="button" class="btn" :class="filter === 'web' ? 'btn-primary' : 'btn-outline'" @click="filter = 'web'">Web Frameworks &amp; CMS</button>
        <button type="button" class="btn" :class="filter === 'ai' ? 'btn-primary' : 'btn-outline'" @click="filter = 'ai'">AI Skills &amp; DevOps</button>
      </div>

      <div class="card-grid">
        <article class="card" x-show="filter === 'all' || filter === 'desktop' || filter === 'ai'" style="border: 2px solid var(--primary);">
          <div>
            <span class="eyebrow">Flagship Suite • Win32 C++20 • x64 &amp; ARM64</span>
            <h3>RaggieSoft Installer Studio (v0.4.1)</h3>
            <p>
              28 years in the making: a zero-dependency Windows packaging suite (<code>InstallerStudio.exe</code> Visual IDE,
              <code>instbuild.exe</code> compiler, <code>SetupWizard.exe</code> live Dark/Light bootstrapper, <code>msiprism.exe</code>
              64-bit SQL inspector, &amp; <code>RaggieSoftHelp.exe</code> offline <code>F1</code> viewer) compiling plain-text
              <code>.rsip</code> projects into <code>.msi</code>, <code>.msm</code>, <code>.mst</code>, <code>.msp</code>, and WCAG 2.2 AA <code>Setup.exe</code> installers.
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-primary" href="https://raggiesoftstudio.com">Preview &amp; Gallery</a>
            <a class="btn btn-outline" href="https://raggiesoftstudio.com/roadmap">Roadmap</a>
            <a class="btn btn-outline" href="https://github.com/raggiesoft/installer-studio">GitHub</a>
          </div>
        </article>

        <article class="card" x-show="filter === 'all' || filter === 'desktop'">
          <div>
            <span class="eyebrow">C# / .NET 10 WinForms • Monaco IDE</span>
            <h3>RaggieSoft Accessibility Studio</h3>
            <p>
              Source-level WCAG 2.2 AA &amp; Revised Section 508 engineering workstation pairing VS Code's Monaco diff editor,
              live Forced-Colors &amp; 400% zoom emulation, and a headless OASIS SARIF 2.1.0 CI/CD scanner.
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-primary" href="https://a11y.raggiesoft.com">Portal (a11y.raggiesoft.com)</a>
            <a class="btn btn-outline" href="https://github.com/raggiesoft/accessibility-studio">GitHub</a>
          </div>
        </article>

        <article class="card" x-show="filter === 'all' || filter === 'web'">
          <div>
            <span class="eyebrow">PHP 8.5 OOP / MVC • Zero SQL</span>
            <h3>Stardust Engine CMS</h3>
            <p>
              MIT-licensed, zero-database PHP 8.5 MVC and JSON-routed web framework powering high-speed server-rendered
              applications with strict security headers and zero relational SQL attack surface.
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-outline" href="https://github.com/raggiesoft/stardust-engine-cms">GitHub Repo</a>
            <a class="btn btn-outline" href="https://raggiesoft.com">Live Hub</a>
          </div>
        </article>

        <article class="card" x-show="filter === 'all' || filter === 'desktop'">
          <div>
            <span class="eyebrow">.NET 10 WPF &amp; Multiplatform SwiftUI</span>
            <h3>Offline-First Companion Apps &amp; Launcher</h3>
            <p>
              Cross-platform Windows 11 (WPF + WebView2) and Apple (macOS, iOS, iPadOS SwiftUI) applications engineered to run
              100% offline from first boot via bundled <code>OfflineSeed</code> catalogs and lock-free asset streams.
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-outline" href="https://launcher.raggiesoft.com">RaggieSoft Launcher</a>
            <a class="btn btn-outline" href="https://storetrainer.raggiesoft.com">StoreTrainer 2.0</a>
          </div>
        </article>

        <article class="card" x-show="filter === 'all' || filter === 'web'">
          <div>
            <span class="eyebrow">Interactive Worldbuilding &amp; Branching DAGs</span>
            <h3>Story Crossroads &amp; Lore Graph Engines</h3>
            <p>
              Static-first interactive narrative compilers (<code>paige.php</code>), directed-acyclic branching engines
              (<code>crossroads.raggiesoft.com</code>), and dual-layer HTML5 Canvas + ARIA worldbuilders.
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-outline" href="https://crossroads.raggiesoft.com">Story Crossroads</a>
            <a class="btn btn-outline" href="https://lore.raggiesoft.com">Lore Graph</a>
          </div>
        </article>

        <article class="card" x-show="filter === 'all' || filter === 'ai'">
          <div>
            <span class="eyebrow">Bash • PHP CLI • Node.js • rclone</span>
            <h3>Polyglot CI/CD &amp; Media Tooling</h3>
            <p>
              Non-interactive multi-repo build orchestration (<code>jenna-sync.sh</code>), self-healing non-root Nginx/Linux
              pull deployment (<code>sarah-deploy.sh</code>), and parallel EBU R128 FFmpeg mastering (<code>harper.sh</code>).
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-outline" href="https://github.com/raggiesoft/raggiesoft-deployment-tools">GitHub Tooling</a>
            <a class="btn btn-outline" href="/notes">Read Architecture Notes</a>
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderReposBody(): string {
  return `
    <section class="hero" aria-labelledby="repos-title">
      <span class="eyebrow">MIT-Licensed Open Source • @raggiesoft</span>
      <h1 id="repos-title">Public GitHub Repositories</h1>
      <p class="lead">
        Every hand-authored source file across RaggieSoft's public repositories includes a plain-English Top-of-File Overview
        and step-by-step 100-level inline teaching comments so engineers and students can read any module cold.
      </p>
    </section>

    <div class="table-wrap">
      <table>
        <caption>Flagship RaggieSoft Open-Source Repositories on GitHub</caption>
        <thead>
          <tr>
            <th scope="col">Repository</th>
            <th scope="col">Primary Stack</th>
            <th scope="col">Summary</th>
            <th scope="col">Links</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"><code>raggiesoft/installer-studio</code></th>
            <td>Native Win32 C++20 (<code>/MT</code>)</td>
            <td>Visual IDE (<code>InstallerStudio.exe</code>), <code>.rsip</code>/<code>.rsis</code> compiler (<code>instbuild.exe</code>), <code>SetupWizard.exe</code>, &amp; <code>msiprism.exe</code>.</td>
            <td><a href="https://github.com/raggiesoft/installer-studio">GitHub</a> &bull; <a href="https://raggiesoftstudio.com">Portal</a></td>
          </tr>
          <tr>
            <th scope="row"><code>raggiesoft/accessibility-studio</code></th>
            <td>C# / .NET 10 WinForms + Monaco</td>
            <td>Workstation WCAG 2.2 AA &amp; Section 508 IDE, live DOM contrast/reflow emulator, &amp; SARIF 2.1.0 CLI.</td>
            <td><a href="https://github.com/raggiesoft/accessibility-studio">GitHub</a> &bull; <a href="https://a11y.raggiesoft.com">Portal</a></td>
          </tr>
          <tr>
            <th scope="row"><code>raggiesoft/stardust-engine-cms</code></th>
            <td>PHP 8.5 OOP / MVC</td>
            <td>Zero-database JSON-routed PHP 8.5 CMS core with automated OpenGraph &amp; security headers.</td>
            <td><a href="https://github.com/raggiesoft/stardust-engine-cms">GitHub</a></td>
          </tr>
          <tr>
            <th scope="row"><code>raggiesoft/storetrainer</code></th>
            <td>C# / .NET 10 + Classic VB6 Archive</td>
            <td>Desktop PC game &amp; companion trainer organizer with custom <code>.stfx</code> profile associations.</td>
            <td><a href="https://github.com/raggiesoft/storetrainer">GitHub</a> &bull; <a href="https://storetrainer.raggiesoft.com">Portal</a></td>
          </tr>
          <tr>
            <th scope="row"><code>raggiesoft/raggiesoft-deployment-tools</code></th>
            <td>Bash, PHP 8.5 CLI &amp; Python</td>
            <td>Jenna multi-repo release gate, Sarah atomic Nginx pull deployer, Paige manuscript compiler, &amp; Harper audio suite.</td>
            <td><a href="https://github.com/raggiesoft/raggiesoft-deployment-tools">GitHub</a></td>
          </tr>
          <tr>
            <th scope="row"><code>raggiesoft/raggiesoft-music</code></th>
            <td>SvelteKit 2 + Svelte 5 Runes</td>
            <td>The Listening Room streaming PWA &amp; Hold-Spacebar WebVTT caption timing studio.</td>
            <td><a href="https://github.com/raggiesoft/raggiesoft-music">GitHub</a> &bull; <a href="https://music.raggiesoft.com">Live App</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

function renderAiSkillsBody(): string {
  return `
    <section class="hero" aria-labelledby="ai-title">
      <span class="eyebrow">llms.txt • llms-full.txt • SKILL.md</span>
      <h1 id="ai-title">AI Agent Skills &amp; Machine-Readable Specifications</h1>
      <p class="lead">
        Rather than hand-maintaining documentation that drifts out of date, RaggieSoft compilers emit
        deterministic <code>llms.txt</code>, <code>llms-full.txt</code>, and <code>SKILL.md</code> files directly from
        compile-time <code>constexpr</code> schema tables.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="/llms.txt">Open raggiesoft.dev/llms.txt</a>
        <a class="btn btn-outline" href="https://raggiesoftstudio.com/llms.txt">Installer Studio /llms.txt</a>
        <a class="btn btn-outline" href="https://raggiesoftstudio.com/SKILL.md">Installer Studio SKILL.md</a>
      </div>
    </section>

    <section aria-labelledby="skill-table-heading">
      <h2 id="skill-table-heading">Direct Endpoints for Antigravity, Cursor, Claude Code &amp; Gemini CLI</h2>
      <div class="table-wrap">
        <table>
          <caption>Published RaggieSoft AI Specifications &amp; Agent Skills</caption>
          <thead>
            <tr>
              <th scope="col">Specification / Skill</th>
              <th scope="col">Canonical URL / GitHub Source</th>
              <th scope="col">Agent Capability Unlocked</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Umbrella Engineering Index (<code>llms.txt</code>)</th>
              <td><a href="/llms.txt">https://raggiesoft.dev/llms.txt</a></td>
              <td>Maps all RaggieSoft open-source repositories, web architectures, and toolchains in one compact token budget.</td>
            </tr>
            <tr>
              <th scope="row">RaggieSoft Installer Studio (<code>.rsip</code> / <code>.rsis</code>)</th>
              <td>
                <a href="https://raggiesoftstudio.com/llms-full.txt">raggiesoftstudio.com/llms-full.txt</a> &bull;
                <a href="https://github.com/raggiesoft/installer-studio/tree/main/specs">GitHub <code>specs/</code></a>
              </td>
              <td>Enables coding agents to author, JSON-lint (<code>instbuild --validate --diagnostics=json</code>), and compile <code>x64</code>/<code>ARM64</code> <code>.msi</code>, <code>.msm</code>, <code>.mst</code>, &amp; <code>.msp</code> installers.</td>
            </tr>
            <tr>
              <th scope="row">RaggieSoft Accessibility Studio SARIF CLI</th>
              <td><a href="https://github.com/raggiesoft/accessibility-studio">github.com/raggiesoft/accessibility-studio</a></td>
              <td>Integrates headless WCAG 2.2 AA &amp; Section 508 DOM audits into agent-driven CI/CD remediation loops.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderNotesBody(): string {
  return `
    <section class="hero" aria-labelledby="notes-title">
      <span class="eyebrow">Engineering Dispatches &amp; Systems Architecture</span>
      <h1 id="notes-title">Developer Notes &amp; Architecture Log</h1>
      <p class="lead">
        Deep-dive notes from building zero-dependency Win32 C++20 compilers, 100% offline-ready hybrid desktop apps,
        and accessible polyglot web properties.
      </p>
    </section>

    <div class="card-grid">
      <article class="card">
        <div>
          <span class="eyebrow">Win32 C++20 &amp; Windows SDK</span>
          <h3>Why Plain-Text .rsip + .rsis Beats XML &amp; Binary Installer Formats</h3>
          <p>
            Calling <code>MsiOpenDatabaseW</code> and <code>FCICreate</code> directly from static <code>/MT</code> C++20 eliminates
            multi-thousand-dollar seat locks, while a comment-preserving line-token AST lets GUI edits in <code>InstallerStudio.exe</code>
            coexist peacefully with clean <code>git diff</code> history and AI coding agents.
          </p>
        </div>
        <a class="btn btn-outline" href="https://raggiesoftstudio.com/docs">Read .rsip Specification</a>
      </article>

      <article class="card">
        <div>
          <span class="eyebrow">Desktop Architecture</span>
          <h3>Engineering 100% Offline-First Desktop Apps from First Boot</h3>
          <p>
            How RaggieSoft's 4-tier asset resolver combines installed content packs, local caches, bundled <code>OfflineSeed</code>
            catalogs, and authenticated CDN streaming so every desktop app renders covers, TOCs, and synchronized lyrics with Wi-Fi unplugged.
          </p>
        </div>
        <a class="btn btn-outline" href="https://launcher.raggiesoft.com">Explore RaggieSoft Launcher</a>
      </article>

      <article class="card">
        <div>
          <span class="eyebrow">Maintainability &amp; Education</span>
          <h3>100-Level Read-Along Teaching Comments + Production Minification</h3>
          <p>
            Why every GitHub repository keeps step-by-step inline explanations for newcomers while <code>sarah-deploy.sh</code>
            strips comments and whitespace automatically inside <code>/var/www/*</code> on production Linux hosts.
          </p>
        </div>
        <a class="btn btn-outline" href="https://michaelpragsdale.com">Author Engineering Dossier</a>
      </article>
    </div>
  `;
}

export const DEV_ROUTES: readonly DevRoute[] = [
  {
    path: '/',
    navLabel: 'Engineering Hub',
    seoTitle: 'raggiesoft.dev — Open-Source Apps, Compilers & AI Skills',
    seoDescription:
      'Official RaggieSoft developer portal featuring RaggieSoft Installer Studio, Accessibility Studio, Stardust Engine CMS, GitHub repos, and llms.txt skills.',
    renderBody: renderHomeBody
  },
  {
    path: '/repositories',
    navLabel: 'GitHub Repos',
    seoTitle: 'Open-Source GitHub Repositories | raggiesoft.dev',
    seoDescription:
      'Browse MIT-licensed RaggieSoft repositories on GitHub: Installer Studio (Win32 C++20), Accessibility Studio (.NET 10), and Stardust Engine CMS (PHP 8.5).',
    renderBody: renderReposBody
  },
  {
    path: '/ai-skills',
    navLabel: 'llms.txt & AI Skills',
    seoTitle: 'AI Agent Skills, llms.txt & SKILL.md | raggiesoft.dev',
    seoDescription:
      'Machine-readable llms.txt, llms-full.txt, and SKILL.md endpoints emitted directly from RaggieSoft compilers for Cursor, Claude Code, and Antigravity.',
    renderBody: renderAiSkillsBody
  },
  {
    path: '/notes',
    navLabel: 'Dev Notes',
    seoTitle: 'Systems Architecture & Developer Notes | raggiesoft.dev',
    seoDescription:
      'Engineering notes on native Win32 C++20 MSI compilation, 100% offline-first desktop applications, WCAG 2.2 AA compliance, and polyglot CI/CD.',
    renderBody: renderNotesBody
  }
];

export function renderDevPage(routePath: string): { html: string } {
  const match = DEV_ROUTES.find((r) => r.path === routePath);
  const navItems = DEV_ROUTES.map((r) => {
    const current = r.path === routePath ? ' aria-current="page"' : '';
    return `<li><a class="nav-link" href="${r.path}"${current}>${r.navLabel}</a></li>`;
  }).join('');

  const mainInner = match
    ? match.renderBody()
    : `
      <section class="hero" aria-labelledby="err-title">
        <span class="eyebrow">HTTP 404 • Route Not Found</span>
        <h1 id="err-title">Page Not Found</h1>
        <p class="lead">The requested raggiesoft.dev developer resource could not be found.</p>
        <div class="btn-row">
          <a class="btn btn-primary" href="/">Return to raggiesoft.dev</a>
          <a class="btn btn-outline" href="/repositories">Browse GitHub Repositories</a>
        </div>
      </section>
    `;

  const html = `
    <header class="site-header" data-theme="dark">
      <div class="header-inner">
        <a class="brand-link" href="/">
          <span class="brand-title">raggiesoft.dev</span>
          <span class="brand-sub">Open-Source Engineering • Compilers • Agent Skills</span>
        </a>

        <button
          type="button"
          class="rs-mobile-header-toggle dev-mobile-toggle"
          data-rs-mobile-toggle
          data-open-label="Open developer portal and RaggieSoft network menu"
          data-close-label="Close developer portal and RaggieSoft network menu"
          aria-expanded="false"
          aria-controls="header-navigation-panel"
          aria-label="Open developer portal and RaggieSoft network menu"
        >
          <svg class="rs-icon-bars" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" aria-hidden="true" focusable="false">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <svg class="rs-icon-close" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" aria-hidden="true" focusable="false">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div id="header-navigation-panel" class="header-nav-panel" data-rs-collapsible="true">
          <nav aria-label="Developer Portal Navigation">
            <ul class="nav-list">
              ${navItems}
              <li><a class="nav-link" href="https://raggiesoftstudio.com">Installer Studio</a></li>
              <li><a class="nav-link" href="https://github.com/raggiesoft">GitHub</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <main id="main-content" class="container" tabindex="-1">
      ${mainInner}
    </main>

    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-links">
          <a href="/">Engineering Hub</a>
          <a href="/repositories">GitHub Repositories</a>
          <a href="/ai-skills">llms.txt &amp; AI Skills</a>
          <a href="/notes">Dev Notes</a>
          <a href="/llms.txt">/llms.txt</a>
          <a href="https://raggiesoftstudio.com">RaggieSoft Installer Studio</a>
          <a href="https://a11y.raggiesoft.com">RaggieSoft Accessibility Studio</a>
          <a href="https://raggiesoft.com">RaggieSoft Consumer Hub</a>
          <a href="https://michaelpragsdale.com">Michael P. Ragsdale Portfolio</a>
          <a href="https://raggiesoft.com/about/privacy">Privacy Policy</a>
          <a href="https://raggiesoft.com/about/terms">Terms of Service</a>
          <a href="https://raggiesoft.com/about/ai-disclaimer">AI &amp; Creative Process | RaggieSoft Governance</a>
        </div>
        <p>
          Copyright &copy; 2026 Michael P. Ragsdale / RaggieSoft. Open-source software licensed under the MIT License.
        </p>
        <p class="disclaimer-box">${FICTITIOUS_DISCLAIMER}</p>
      </div>
    </footer>
  `;

  return { html };
}
