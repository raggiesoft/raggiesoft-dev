/**
 * ============================================================================
 * FILE: src/routes.ts
 * PROPERTY: https://raggiesoft.dev (RaggieSoft Developer, Open-Source & Labs Hub)
 * STACK: Alpine.js 3 + TypeScript + Vite Static SSG
 * LICENSE: MIT License (Copyright (c) 2026 Michael P. Ragsdale / RaggieSoft)
 * ============================================================================
 * PLAIN-ENGLISH OVERVIEW FOR 100-LEVEL READERS:
 *   What is this file?
 *     Defines the 6 canonical pre-rendered routes for `https://raggiesoft.dev`
 *     (kept in permanent 1:1 lockstep with `https://raggiesoftstudio.com`,
 *     our GitHub repositories, AI agent specifications, and RaggieSoft Labs):
 *       1. `/`              — Engineering Hub: 8-Tool RaggieSoft Studio,
 *                             RaggieScript, Fin#, Stardust CMS, & Native Apps
 *       2. `/labs`          — RaggieSoft Labs: Experimental Compilers,
 *                             RaggieScript VM, _support\ Canvas Packager, & R&D
 *       3. `/labs/finsharp` — Fin# (Financial Sharp): Linear-Type Double-Entry
 *                             Financial Programming Language & Compiler Lab
 *       4. `/repositories`  — Public MIT-Licensed GitHub Repositories (@raggiesoft)
 *       5. `/ai-skills`     — Compiler-Emitted `llms.txt`, `llms-full.txt` & `SKILL.md`
 *       6. `/notes`         — Systems Architecture & Compiler Engineering Log
 *
 *   How Accessibility & Responsive Navigation Work Here:
 *     - Every interactive filter and compiler diagnostic simulator uses semantic
 *       HTML5 `<button>` controls and `aria-live="polite"` output regions so
 *       keyboard and screen-reader users experience 100% parity with mouse users.
 *     - Below `768px`, the top navigation collapses into a single-row `<header>`
 *       with a `>= 44x44px` `.rs-mobile-header-toggle` button controlling
 *       `#header-navigation-panel` (paired with `raggiesoft-network.js`).
 * ============================================================================
 */

export interface DevRoute {
  readonly path: string;
  readonly navLabel: string;
  readonly seoTitle: string;       // Enforced <= 60 chars by scripts/prerender.mjs
  readonly seoDescription: string; // Enforced <= 155 chars by scripts/prerender.mjs
  readonly renderBody: () => string;
}

// Mandatory Fictitious Persons & Entities Disclaimer rendered in the global footer of every route.
const FICTITIOUS_DISCLAIMER =
  'Fictitious Persons & Entities Disclaimer: All narrative characters (including Zoë Wren Brooks, Jordan Fuller, and Daniel Brooks), bands (including The Stardust Engine), biographies, universities (including Commonwealth Polytechnic Institute / CPI, Virginia Dominion University / VDU, The Forgers, and The Crucible), corporations (including Vectron Energy Corp., OmniCorp, Apex Records, Prairie Coachworks, and Sainte-Claire), transit agencies (BRT and CVTA), in-universe legal filings, and events across RaggieSoft creative works are works of fiction. In real life, RaggieSoft, RaggieSoft Media, Engine Room Records, Ocean View Archives, and RaggieSoft Story Crossroads are unincorporated creative imprints of Michael P. Ragsdale.';

/**
 * Route 1: `/` — Umbrella Software, Compiler, Studio & Open-Source Engineering Hub.
 */
function renderHomeBody(): string {
  return `
    <section class="hero" aria-labelledby="dev-hero">
      <span class="eyebrow">The Code Behind RaggieSoft's Projects • 100% Open Source (MIT Code • CC BY-SA 4.0 Creative)</span>
      <h1 id="dev-hero">raggiesoft.dev — The Open-Source Code Behind RaggieSoft's Projects</h1>
      <p class="lead">
        Every RaggieSoft software engine, compiler, desktop workstation, and web framework is <strong>100% open source under the
        MIT License</strong>, paired with <strong>CC BY-SA 4.0</strong> across our novels, music, and worldbuilding. Each language
        and engineering stack gets its own dedicated <strong><code>&lt;project&gt;.raggiesoft.dev</code></strong> portal—starting with
        <strong><a href="https://raggiescript.raggiesoft.dev"><code>raggiescript.raggiesoft.dev</code></a></strong> and
        <strong><a href="https://finsharp.raggiesoft.dev"><code>finsharp.raggiesoft.dev</code></a></strong> (both dogfooded &amp;
        compiled by <strong>RaggieSoft Help Studio v0.6.0</strong>!).
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="https://raggiescript.raggiesoft.dev">RaggieScript Docs (raggiescript.raggiesoft.dev) &rarr;</a>
        <a class="btn btn-outline" href="https://finsharp.raggiesoft.dev">Fin# Docs (finsharp.raggiesoft.dev) &rarr;</a>
        <a class="btn btn-outline" href="/labs">RaggieSoft Labs</a>
        <a class="btn btn-outline" href="https://raggiesoftstudio.com">RaggieSoft Studio (8 Tools)</a>
        <a class="btn btn-outline" href="https://github.com/raggiesoft">GitHub (@raggiesoft)</a>
      </div>
    </section>

    <section aria-labelledby="subdomains-heading" style="margin-bottom: 2rem;">
      <span class="eyebrow">Dogfooded Standalone Learn Portals • Compiled by Help Studio v0.6.0 (rshbuild.exe)</span>
      <h2 id="subdomains-heading" style="margin-top: 0.25rem;">Live <code>*.raggiesoft.dev</code> Language &amp; API Portals</h2>
      <div class="lab-grid-2x2">
        <article class="card" style="border: 2px solid var(--primary);">
          <div>
            <span class="eyebrow">Canonical Language Reference • 16 Chapters • 175+ Indexed Calls &amp; .NET SDK</span>
            <h3><a href="https://raggiescript.raggiesoft.dev">raggiescript.raggiesoft.dev</a> — RaggieScript v1.2 (<code>.rssc</code>)</h3>
            <p>
              Complete <code>learn.microsoft.com</code>-style reference documenting every function, property, enum constant,
              23-method zero-dependency <code>archive.*</code> suite (<code>.7z</code>/<code>LZMA2</code>, <code>.zip</code>,
              <code>.rswpak</code>, <code>.cab</code>, <code>.tar.zst</code>, <code>.iso</code>, <code>.wim</code>),
              declarative Win32 Wizard UI control, <strong>two-way <code>.NET</code> Host SDK (<code>RaggieScript.Core</code>)</strong>,
              <code>RSWBC2</code> opcode, and <code>RSW700</code>&ndash;<code>RSW715</code> diagnostic—compiled by
              <code>rshbuild.exe</code> with instant <code>Ctrl+K</code> symbol search.
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-primary" href="https://raggiescript.raggiesoft.dev">Open RaggieScript Docs &rarr;</a>
            <a class="btn btn-outline" href="https://raggiescript.raggiesoft.dev/api-index.html">Master A&ndash;Z API Index</a>
            <a class="btn btn-outline" href="https://raggiesoftstudio.com/raggiescript">Studio Playground</a>
          </div>
        </article>

        <article class="card" style="border: 2px solid var(--primary);">
          <div>
            <span class="eyebrow">From /books/aubrie Plot Device to Real MIT Language • 6 Chapters</span>
            <h3><a href="https://finsharp.raggiesoft.dev">finsharp.raggiesoft.dev</a> — Fin# (<em>Financial Sharp</em> / <code>finsc</code>)</h3>
            <p>
              Standalone language specification &amp; conservation reference for <code>Fin#</code>—tracing how a plot device
              co-developed for Zo&euml; Wren Brooks and Jordan Fuller in
              <a href="https://books.raggiesoft.com/aubrie/fall-semester-2015/the-5-45-am-problem-the-birth-of-fin-home-on-geneva-street/part-3-question-the-rules-the-birth-of-fin"><em>The Eleventh Child</em> (<code>/books/aubrie</code>)</a>
              became a real MIT-licensed linear-type <code>.NET</code> financial language enforcing Conservation of Capital
              (<code>FIN0001</code>&ndash;<code>FIN0005</code>).
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-primary" href="https://finsharp.raggiesoft.dev">Open Fin# Docs &rarr;</a>
            <a class="btn btn-outline" href="https://finsharp.raggiesoft.dev/origin-in-aubrie.html">Origin in /books/aubrie</a>
            <a class="btn btn-outline" href="/labs/finsharp">Interactive Simulator</a>
          </div>
        </article>
      </div>
    </section>

    <section aria-labelledby="projects-heading" x-data="{ filter: 'all' }">
      <h2 id="projects-heading">Flagship Engineering Suites, Compilers &amp; Platforms</h2>
      <div class="btn-row" style="margin-bottom: 1.25rem;" role="group" aria-label="Filter Engineering Efforts by Discipline">
        <button type="button" class="btn" :class="filter === 'all' ? 'btn-primary' : 'btn-outline'" @click="filter = 'all'">All Efforts (8)</button>
        <button type="button" class="btn" :class="filter === 'compilers' ? 'btn-primary' : 'btn-outline'" @click="filter = 'compilers'">Compilers &amp; Labs (Fin# / RaggieScript)</button>
        <button type="button" class="btn" :class="filter === 'desktop' ? 'btn-primary' : 'btn-outline'" @click="filter = 'desktop'">RaggieSoft Studio &amp; Native Apps</button>
        <button type="button" class="btn" :class="filter === 'web' ? 'btn-primary' : 'btn-outline'" @click="filter = 'web'">Web Frameworks &amp; DevOps</button>
      </div>

      <div class="card-grid">
        <article class="card" x-show="filter === 'all' || filter === 'desktop' || filter === 'compilers'" style="border: 2px solid var(--primary);">
          <div>
            <span class="eyebrow">Flagship • Static /MT Win32 C++20 • x64 &amp; ARM64</span>
            <h3>RaggieSoft Installer Studio (v0.7.0 Shipping • Archive v0.5.0&ndash;v0.7.0)</h3>
            <p>
              Zero-dependency Windows packaging suite (<code>InstallerStudio.exe</code>, <code>instbuild.exe --edition=...</code>,
              <code>SetupWizard.exe</code>, standalone read/write <code>msiprism.exe</code>, standalone <code>rswsfx.exe</code>, &amp;
              <code>RaggieSoftHelp.exe</code>) featuring <strong>Dual WYSIWYG Dialog Designers</strong> built on shared
              <code>RaggieSoftVisualCanvas.hpp</code>, turnkey <strong><code>RsDialog</code></strong> wizard scripting, non-clobbering
              <code>[Environment.*]</code> <code>PATH</code> updates, and <strong>monotonic Dual-Bar Suites</strong>.
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-primary" href="https://raggiesoftstudio.com/download">Download v0.7.0 &rarr;</a>
            <a class="btn btn-outline" href="https://raggiesoftstudio.com/download/previous-versions">Previous Versions</a>
            <a class="btn btn-outline" href="https://raggiesoftstudio.com/installer-studio">Installer Hub</a>
            <a class="btn btn-outline" href="https://github.com/raggiesoft/installer-studio">GitHub</a>
          </div>
        </article>

        <article class="card" x-show="filter === 'all' || filter === 'compilers'" style="border: 2px solid var(--primary);">
          <div>
            <span class="eyebrow">RaggieSoft Labs • Linear-Type .NET / Roslyn Compiler</span>
            <h3>Fin# (Financial Sharp — /labs/finsharp)</h3>
            <p>
              Born from <em>Ocean View Archives</em> (<code>/books/aubrie</code>): an experimental domain-specific financial
              programming language &amp; compiler (<code>finsc</code>) replacing mutable scalar decimals with linear
              <code>Capital&lt;TCurrency&gt;</code> resource types so unbalanced journal entries halt at compile time with
              <code>FIN0001: ConservationOfCapitalViolationException</code>.
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-primary" href="https://finsharp.raggiesoft.dev">Fin# Docs Portal &rarr;</a>
            <a class="btn btn-outline" href="/labs/finsharp">Compiler Simulator</a>
            <a class="btn btn-outline" href="https://books.raggiesoft.com/aubrie">Read /books/aubrie</a>
          </div>
        </article>

        <article class="card" x-show="filter === 'all' || filter === 'compilers' || filter === 'desktop'">
          <div>
            <span class="eyebrow">Shipped Multi-Target SDK • Static C++20, .NET &amp; ES2022</span>
            <h3>RaggieScript v1.0 (.rssc) — Linear Stack VM, Type Binder &amp; Wizard UI</h3>
            <p>
              Gradually typed curly-brace scripting &amp; declarative UI language (<code>struct</code>, <code>enum</code>,
              <code>match</code>, <code>=&gt;</code> closures, <code>RSW701</code>&ndash;<code>RSW715</code> static diagnostics,
              <code>RSWBC2</code> SHA-256 linear stack bytecode, Per-Monitor V2 DPI Win32 Wizard UI engine, <code>fmt</code>,
              JSON-RPC 2.0 <code>lsp</code>, <code>.NET</code> <code>RaggieScript.Core</code>, and zero-<code>eval()</code> SCORM <code>ES2022</code>).
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-primary" href="https://raggiescript.raggiesoft.dev">Full Docs (raggiescript.raggiesoft.dev) &rarr;</a>
            <a class="btn btn-outline" href="https://raggiesoftstudio.com/raggiescript">Playground</a>
            <a class="btn btn-outline" href="/raggiescript/llms-raggiescript.txt">llms-raggiescript.txt</a>
          </div>
        </article>

        <article class="card" x-show="filter === 'all' || filter === 'desktop'">
          <div>
            <span class="eyebrow">8-Tool Suite • Community, Essentials, Developer &amp; Architect</span>
            <h3>RaggieSoft Studio Showcase, Compliance, Help &amp; Training</h3>
            <p>
              Alongside Installer Studio: <strong>Showcase Studio v0.5.0</strong> (static <code>/MT</code> C++20 1990s <code>.BMP</code>,
              <code>FluentMica</code> &amp; <code>_support\\</code> canvas installers sharing DRY <code>RaggieSoftVisualCanvas.hpp</code>),
              <strong>Accessibility Studio v1.0.0</strong> (.NET 11 + Monaco + SARIF CLI),
              <strong>Help Studio v0.6.0</strong> (static <code>/MT</code> C++20 <code>.CHM</code> &amp; WinHelp <code>.HLP</code>/<code>.CNT</code> decompiler &amp; <code>&lt;5ms</code> <code>F1</code> IPC),
              <strong>Training Studio v0.5.0</strong> (<code>&lt;50 KB</code> proxy-proof SCORM 1.2/2004), <strong>Document Studio</strong>,
              <strong>Localization Studio</strong>, and <strong>Launcher Studio</strong>.
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-primary" href="https://raggiesoftstudio.com/showcase-studio">Showcase Studio</a>
            <a class="btn btn-outline" href="https://raggiesoftstudio.com/editions">8-Tool Editions Matrix</a>
          </div>
        </article>

        <article class="card" x-show="filter === 'all' || filter === 'desktop'">
          <div>
            <span class="eyebrow">.NET 11 WPF &amp; Multiplatform SwiftUI</span>
            <h3>Offline-First Companion Apps &amp; Launcher</h3>
            <p>
              Cross-platform Windows 11 and Apple (macOS, iOS, iPadOS SwiftUI) consumer apps (<em>Launcher</em>, <em>Book Reader</em>,
              <em>The Listening Room</em>, <em>Backstage</em>, and <em>StoreTrainer</em>) engineered to run 100% offline from first boot.
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-outline" href="https://launcher.raggiesoft.com">RaggieSoft Launcher</a>
            <a class="btn btn-outline" href="https://storetrainer.raggiesoft.com">StoreTrainer 2.0</a>
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

        <article class="card" x-show="filter === 'all' || filter === 'web'">
          <div>
            <span class="eyebrow">Bash • PHP CLI • Node.js • rclone • cf • doctl</span>
            <h3>Polyglot CI/CD &amp; Media Tooling</h3>
            <p>
              Non-interactive multi-repo release orchestration (<code>jenna-sync.sh</code>), self-healing non-root Nginx/Linux
              pull deployment (<code>sarah-deploy.sh</code>), and parallel EBU R128 FFmpeg mastering (<code>harper.sh</code>).
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-outline" href="https://github.com/raggiesoft/raggiesoft-deployment-tools">GitHub Tooling</a>
            <a class="btn btn-outline" href="/notes">Architecture Notes</a>
          </div>
        </article>
      </div>
    </section>
  `;
}

/**
 * Route 2: `/labs` — RaggieSoft Labs (Experimental Compilers, Runtimes & Lore-to-Reality R&D).
 */
function renderLabsBody(): string {
  return `
    <section class="hero" aria-labelledby="labs-title">
      <span class="eyebrow">RaggieSoft Labs • Compiler Design, Bytecode VMs &amp; Lore-to-Reality R&amp;D</span>
      <h1 id="labs-title">RaggieSoft Labs — Experimental Compilers &amp; Systems Research</h1>
      <p class="lead">
        At RaggieSoft, ideas regularly cross the boundary between narrative worldbuilding and working MIT-licensed software.
        <strong>RaggieSoft Labs</strong> is our open engineering incubator for domain-specific compilers, capability-gated
        bytecode virtual machines, and upcoming candidates for the <a href="https://raggiesoftstudio.com">RaggieSoft Studio</a>
        product line.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="/labs/finsharp">Enter Fin# (Financial Sharp) Lab &rarr;</a>
        <a class="btn btn-outline" href="https://raggiesoftstudio.com/raggiescript">RaggieScript (.rssc) Playground &rarr;</a>
        <a class="btn btn-outline" href="https://raggiesoftstudio.com/installer-studio/screenshots#v060-lab-previews">v0.6.0 Win32 Lab Previews &rarr;</a>
      </div>
    </section>

    <section aria-labelledby="active-labs-heading">
      <h2 id="active-labs-heading">Active Incubator Tracks</h2>
      <div class="lab-grid-2x2">
        <article class="card" style="border: 2px solid var(--primary);">
          <div>
            <span class="status-pill">Lab Track 01 • Active Compiler Design</span>
            <h3>Fin# (Financial Sharp — <code>finsc</code>)</h3>
            <p>
              Inspired directly by Zo&euml; Wren Brooks and Jordan Fuller's dining-table breakthrough in
              <em>Question The Rules: The Birth of Fin#</em> (<code>/books/aubrie</code>): a linear-type financial programming
              language on <code>.NET</code> / Roslyn principles where money cannot be created out of thin air, mutated outside a
              balanced <code>transaction</code> block, or rounded into thin air without triggering a compile-time error
              (<code>FIN0001: ConservationOfCapitalViolationException</code>).
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-primary" href="/labs/finsharp">Open Fin# Spec &amp; Simulator &rarr;</a>
            <a class="btn btn-outline" href="/labs/finsharp/llms-finsharp.txt">Cold-Start AI Spec</a>
          </div>
        </article>

        <article class="card">
          <div>
            <span class="status-pill">Lab Track 02 • Built &amp; Verified in C++20 (x64 &amp; ARM64)</span>
            <h3>RaggieScript (<code>.rssc</code>), Deferred UAC, MSI SQL &amp; <code>msiprism.exe</code></h3>
            <p>
              Static <code>/MT</code> C++20 compiler &amp; 16-namespace Win32 VM enforcing <code>RSW701</code> wizard phase
              isolation (powering zero-upfront-prompt <code>Uac.Deferred</code> commit elevation), direct relational
              <code>msi.*</code> SQL table surgery, 64-bit <code>ffi.call</code>, Windows Restart Manager, standalone read/write
              <strong>RaggieSoft MSI Prism</strong>, and official VS Code <code>.vsix</code> + multi-editor syntax highlighting.
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-primary" href="https://raggiesoftstudio.com/raggiescript">Try 6-Profile Playground &amp; Stdlib &rarr;</a>
            <a class="btn btn-outline" href="https://raggiesoftstudio.com/installer-studio/EDITIONS_AND_RAGGIESCRIPT.md">Spec (.md)</a>
          </div>
        </article>

        <article class="card">
          <div>
            <span class="status-pill">Lab Track 03 • Shipped in Showcase Studio v0.5.0 (x64 &amp; ARM64)</span>
            <h3>Bespoke Full-Canvas Self-Extracting Installers (<code>_support\\</code>)</h3>
            <p>
              Static <code>/MT</code> C++20 runtime (<code>ShowcaseStub.exe</code>) &amp; compiler (<code>rssbuild.exe</code>)
              marrying 1990s painted <code>.BMP</code> &amp; Windows 11 <code>FluentMica</code> canvases (rect + polygon hotspots,
              Media Foundation + <code>.vtt</code> audio) with embedded <code>_support\\</code> staging, <code>RaggieScript</code>
              <code>RSWBC2</code>, selectable/deferred UAC, and <code>.rsw-rollback.jnl</code> undo journals.
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-outline" href="https://raggiesoftstudio.com/showcase-studio">Explore Showcase Studio &rarr;</a>
          </div>
        </article>

        <article class="card">
          <div>
            <span class="status-pill">Lab Track 04 • Staged in Installer Studio v0.6.0 &amp; v0.7.0</span>
            <h3>Shared <code>RaggieSoftVisualCanvas</code> Designers, Turnkey <code>RsDialog</code> &amp; Dual-Bar Suites</h3>
            <p>
              Unifies 2D WYSIWYG stage math, 8-grip resize handles, smart snap guides, keyboard-only arrow nudging, and one-click
              <code>.rssc</code> export in <code>studio-shared/include/RaggieSoftVisualCanvas.hpp</code> across Studio IDEs—paired
              with turnkey <code>RsWelcome</code>..<code>RsFinish</code> functions, non-clobbering <code>[Environment.*]</code>
              <code>PATH</code> rules, and monotonic Dual-Bar Suite progress!
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-outline" href="https://raggiesoftstudio.com/installer-studio/screenshots#v060-lab-previews">View Real Win32 Captures &rarr;</a>
          </div>
        </article>
      </div>
    </section>
  `;
}

/**
 * Route 3: `/labs/finsharp` — Fin# (Financial Sharp) Compiler Blueprint & Interactive Diagnostic Lab.
 */
function renderFinSharpLabBody(): string {
  return `
    <section class="hero" aria-labelledby="finsharp-title">
      <span class="eyebrow">RaggieSoft Labs • Linear-Type Financial Compiler Research (v0.1.0-lab)</span>
      <h1 id="finsharp-title">Fin# (Financial Sharp) — Enforcing Conservation of Capital at Compile Time.</h1>
      <p class="lead">
        <em>&ldquo;Because rules made by monopolies can be questioned. The laws of conservation cannot.&rdquo;</em><br />
        Originating in RaggieSoft's <em>Ocean View Archives</em> novel series (<code>/books/aubrie</code>, Chapter
        <em>Question The Rules: The Birth of Fin#</em>) and now under active engineering design in <strong>RaggieSoft Labs</strong>,
        <strong><code>Fin#</code> (<code>FinSharp</code> / <code>finsc</code>)</strong> brings <strong>linear resource types</strong>
        to the <code>.NET</code> &amp; Roslyn compiler ecosystem—turning unbalanced double-entry accounting entries, binary
        floating-point rounding drift, and synthetic revenue creation from post-facto audit findings into <strong>hard compile-time
        errors</strong>.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="https://finsharp.raggiesoft.dev">Open Full Fin# Docs (finsharp.raggiesoft.dev) &rarr;</a>
        <a class="btn btn-outline" href="#finsc-simulator">Try Interactive finsc Simulator &darr;</a>
        <a class="btn btn-outline" href="https://books.raggiesoft.com/aubrie/fall-semester-2015/the-5-45-am-problem-the-birth-of-fin-home-on-geneva-street/part-3-question-the-rules-the-birth-of-fin">Read &ldquo;The Birth of Fin#&rdquo; in /books/aubrie &nearr;</a>
        <a class="btn btn-outline" href="/labs/finsharp/llms-finsharp.txt">llms-finsharp.txt</a>
      </div>
    </section>

    <section aria-labelledby="why-finsharp-heading">
      <h2 id="why-finsharp-heading">The Core Bug in Imperative Finance Code</h2>
      <div class="lab-grid-2x2">
        <article class="card">
          <div>
            <span class="eyebrow">Standard Imperative Languages (C#, Java, C++, COBOL)</span>
            <h3>Money Treated as an Unconstrained Scalar</h3>
            <p>
              In general-purpose languages, <code>decimal</code> is just a mutable number. A developer or rogue script can write
              <code>companyRevenue += 500_000_000.00m;</code> and the compiler succeeds with <strong>0 errors and 0 warnings</strong>—even
              though half a billion dollars appeared out of nowhere with zero corresponding debit, and fractional allocation
              remainders can be silently dropped into garbage collection. Sarbanes-Oxley (<code>SOX</code> Sections 302 &amp; 404)
              only catches the corruption months later during human audits.
            </p>
          </div>
        </article>
        <article class="card" style="border: 2px solid var(--primary);">
          <div>
            <span class="eyebrow">Fin# Linear Resource Type System (finsc)</span>
            <h3>First Law of Thermodynamics Applied to Luca Pacioli (1494)</h3>
            <p>
              Just as quantum programming languages forbid cloning or deleting an entangled qubit, <code>Fin#</code> models
              <code>Capital&lt;TCurrency&gt;</code> as a <strong>protected linear resource type</strong>. Capital cannot be
              instantiated out of thin air, overwritten, or dropped at scope exit; it can only move inside a balanced
              <code>transaction</code> block where the compiler symbolically proves <code>&Sigma; Debits == &Sigma; Credits</code>
              before emitting a single instruction of <code>.NET</code> IL!
            </p>
          </div>
        </article>
      </div>
    </section>

    <section id="finsc-simulator" class="lab-sandbox" aria-labelledby="finsc-sim-heading" x-data="{ snippet: 'violation' }">
      <span class="eyebrow">Interactive Compiler Diagnostic Simulator • finsc v0.1.0-lab</span>
      <h2 id="finsc-sim-heading" style="margin-top: 0.25rem;">Test How <code>finsc</code> Rejects Unbalanced Capital &amp; Verifies Double-Entry Ledgers</h2>
      <div class="btn-row" role="tablist" aria-label="Choose Fin# Compiler Test Case" style="margin-bottom: 1rem;">
        <button type="button" class="btn" :class="snippet === 'violation' ? 'btn-primary' : 'btn-outline'" role="tab" :aria-selected="String(snippet === 'violation')" @click="snippet = 'violation'">1. Thin-Air Revenue Mutation (FIN0001)</button>
        <button type="button" class="btn" :class="snippet === 'remainder' ? 'btn-primary' : 'btn-outline'" role="tab" :aria-selected="String(snippet === 'remainder')" @click="snippet = 'remainder'">2. Dropped Penny Remainder (FIN0005)</button>
        <button type="button" class="btn" :class="snippet === 'valid' ? 'btn-primary' : 'btn-outline'" role="tab" :aria-selected="String(snippet === 'valid')" @click="snippet = 'valid'">3. Verified Balanced Transaction (PASS)</button>
      </div>

      <div x-show="snippet === 'violation'">
        <pre aria-label="Invalid Imperative Revenue Mutation Rejected by Fin#">// File: QuarterlyClose.fin — Attempting unconstrained scalar addition on an Account
ledger CorporateBooks&lt;USD&gt; {
  account OperatingCash    : Asset&lt;USD&gt;;
  account WholesaleRevenue : Revenue&lt;USD&gt;;
}

fn BookSyntheticGain(books: ref CorporateBooks&lt;USD&gt;) {
  // Illegal in Fin#: where did 500,000,000.00 USD come from? Which account was debited?
  books.WholesaleRevenue += 500_000_000.00_USD;
}</pre>
        <div class="lab-diag-box" aria-live="polite">
          <strong>Build FAILED (Exit Code 1) — Halted Before IL Emission:</strong>
          <pre style="margin: 0.5rem 0 0;">QuarterlyClose.fin(9,3): error FIN0001: ConservationOfCapitalViolationException —
  Account 'WholesaleRevenue' (Revenue&lt;USD&gt;) cannot be mutated via scalar '+=' outside an atomic
  'transaction' block with a proving Debit counterparty of equal Capital&lt;USD&gt; magnitude.</pre>
        </div>
      </div>

      <div x-show="snippet === 'remainder'" style="display: none;">
        <pre aria-label="Dropped Split Remainder Rejected by Fin# Linear Flow Analyzer">// File: DividendSplit.fin — Splitting $100.00 USD equally across 3 accounts ($33.33 * 3 = $99.99)
transaction AllocateGrant(pool: move Capital&lt;USD&gt;) {
  // Exact 3-way floor division returns a linear tuple: (quotient[3], remainder: 0.01_USD)
  let (shares, unallocatedCents) = capital.splitEqual(move pool, parts: 3);

  debit  DeptResearch &lt;- move shares[0];
  debit  DeptTransit  &lt;- move shares[1];
  debit  DeptAquatic  &lt;- move shares[2];
  // Oops! 'unallocatedCents' (0.01_USD) goes out of scope without being posted!
}</pre>
        <div class="lab-diag-box" aria-live="polite">
          <strong>Build FAILED (Exit Code 1) — Linear Resource Leak Detected:</strong>
          <pre style="margin: 0.5rem 0 0;">DividendSplit.fin(10,1): error FIN0005: UnconsumedLinearCapitalError —
  Linear binding 'unallocatedCents' of type 'Capital&lt;USD&gt;' goes out of scope unconsumed!
  Route the exact remainder explicitly (e.g., 'debit RoundingReserve &lt;- move unallocatedCents;').</pre>
        </div>
      </div>

      <div x-show="snippet === 'valid'" style="display: none;">
        <pre aria-label="Valid Fin# Balanced Double-Entry Transaction">// File: AquaticMembership.fin — Verified balanced journal entry + Z-SOX-302 audit hash
ledger HouseholdLedger&lt;USD&gt; {
  account CheckingAccount          : Asset&lt;USD&gt;;
  account RecreationAndPhysicalTherapy : Expense&lt;USD&gt;;
}

fn RecordMonthlyKeytag(books: ref HouseholdLedger&lt;USD&gt;) {
  transaction "Christiansburg Aquatic Center Non-Resident Keytag" [audit: Z_SOX_302] {
    debit  books.RecreationAndPhysicalTherapy : 30.00_USD;
    credit books.CheckingAccount              : 30.00_USD;
  }
}</pre>
        <div class="lab-diag-box" aria-live="polite">
          <strong>Build SUCCEEDED (0 Errors, 0 Warnings — Conservation Proof Verified in 1.4 ms):</strong>
          <pre style="margin: 0.5rem 0 0;">[OK] finsc AquaticMembership.fin --target=net11.0 --verify-linear-conservation
     Proved: Sum(Debits&lt;USD&gt;) [30.00] == Sum(Credits&lt;USD&gt;) [30.00] (Delta == 0.00_USD)
     Emitted: AquaticMembership.dll + Z-SOX-302 deterministic ledger proof manifest.</pre>
        </div>
      </div>
    </section>

    <section aria-labelledby="finsharp-diagnostics-heading">
      <h2 id="finsharp-diagnostics-heading">Core Compile-Time Type Rules &amp; Diagnostic Codes</h2>
      <div class="table-wrap">
        <table>
          <caption>Fin# v0.1.0-lab Compiler Invariants &amp; Fatal Diagnostic Gates</caption>
          <thead>
            <tr>
              <th scope="col">Code</th>
              <th scope="col">Compiler Invariant</th>
              <th scope="col">What It Prevents at Compile Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><code>FIN0001</code></th>
              <td><strong>Conservation of Capital</strong> (<code>ConservationOfCapitalViolationException</code>)</td>
              <td>Blocks thin-air currency literal creation, overwrite, or scalar <code>+=</code> / <code>-=</code> on accounts outside a balanced <code>transaction</code>.</td>
            </tr>
            <tr>
              <th scope="row"><code>FIN0002</code></th>
              <td><strong>Balanced Double-Entry Proof</strong> (<code>&Sigma; Debits == &Sigma; Credits</code>)</td>
              <td>Rejects any <code>transaction</code> block whose concrete or symbolic debits and credits do not balance identically per currency.</td>
            </tr>
            <tr>
              <th scope="row"><code>FIN0003</code></th>
              <td><strong>Zero Binary Floating-Point</strong> (IEEE 754 <code>float</code> / <code>double</code> Banned)</td>
              <td>Eliminates <code>0.1 + 0.2 != 0.3</code> base-2 drift by enforcing 128-bit scaled fixed-point arithmetic on all monetary types.</td>
            </tr>
            <tr>
              <th scope="row"><code>FIN0004</code></th>
              <td><strong>Dimension-Typed ISO 4217 Currencies</strong> (<code>Capital&lt;USD&gt;</code> vs. <code>Capital&lt;EUR&gt;</code>)</td>
              <td>Prevents accidental cross-currency addition without an explicit, timestamped FX conversion &amp; settlement bridge.</td>
            </tr>
            <tr>
              <th scope="row"><code>FIN0005</code></th>
              <td><strong>Linear Remainder Conservation</strong> (No Silent Rounding Drops)</td>
              <td>Forces division/proration operations to return <code>(shares, remainder)</code> linear tuples where every single cent must be routed.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section aria-labelledby="finsharp-arch-heading">
      <h2 id="finsharp-arch-heading">Compiler Engineering Roadmap &amp; Potential RaggieSoft Studio Integration</h2>
      <div class="lab-grid-2x2">
        <article class="card">
          <div>
            <h3>Clean C# &ldquo;Mini-Roslyn&rdquo; Frontend &rarr; .NET 11 / Roslyn Backend</h3>
            <p>
              Rather than carrying a 4-million-line upstream <code>dotnet/roslyn</code> merge burden, our primary architecture pairs
              a crisp, 100-level-commented C# immutable syntax/binding/linear-flow frontend (<code>FinSharp.Compiler</code>) with
              in-process <code>Microsoft.CodeAnalysis.CSharp</code> lowering &amp; PE emission—delivering sub-second builds, full
              NuGet interoperability, NativeAOT support, and PDB debugging!
            </p>
          </div>
        </article>
        <article class="card">
          <div>
            <h3>Candidate Studio Tool: <em>RaggieSoft Fin# / Ledger Studio</em></h3>
            <p>
              Pairing <strong>Accessibility Studio</strong>'s proven <code>.NET 11 + Monaco</code> workstation shell with a live
              <code>Fin#</code> Language Server (<code>LSP</code>), real-time T-account conservation diagrams, <code>Z-SOX-302</code>
              audit proofs, and <strong>Document Studio</strong> Tagged <code>PDF/UA-1</code> statement generation—following our
              permanent <code>Community == 100% Architect</code> rule.
            </p>
          </div>
        </article>
      </div>
    </section>
  `;
}

/**
 * Route 4: `/repositories` — Public MIT-Licensed GitHub Repositories (@raggiesoft).
 */
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
        <caption>Flagship RaggieSoft Open-Source Repositories &amp; Studio Toolchains on GitHub</caption>
        <thead>
          <tr>
            <th scope="col">Repository / Suite Module</th>
            <th scope="col">Primary Stack</th>
            <th scope="col">Summary</th>
            <th scope="col">Links</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"><code>raggiesoft/installer-studio</code></th>
            <td>Native Win32 C++20 (<code>/MT</code>)</td>
            <td>Visual IDE (<code>InstallerStudio.exe</code>), <code>.rsip</code>/<code>.rsis</code> compiler (<code>instbuild.exe</code>), 10-style <code>SetupWizard.exe</code>, Monotonic Dual-Bar Suites, <code>sfx</code>, &amp; <code>msiprism.exe</code>.</td>
            <td><a href="https://github.com/raggiesoft/installer-studio">GitHub</a> &bull; <a href="https://raggiesoftstudio.com/installer-studio">Portal</a></td>
          </tr>
          <tr>
            <th scope="row"><code>raggiesoft/accessibility-studio</code></th>
            <td>C# / .NET 11 WinForms + Monaco</td>
            <td>Workstation WCAG 2.2 AA &amp; Section 508 IDE, Guided Fix diffs, live contrast/reflow emulator, &amp; SARIF 2.1.0 CLI.</td>
            <td><a href="https://github.com/raggiesoft/accessibility-studio">GitHub</a> &bull; <a href="https://raggiesoftstudio.com/accessibility-studio">Portal</a></td>
          </tr>
          <tr>
            <th scope="row">RaggieSoft Training, Help, Document, Localization, Launcher &amp; Showcase Studio</th>
            <td>Win32 C++20 &amp; .NET 11</td>
            <td>Bandwidth-proof <code>&lt;50 KB</code> SCORM 1.2/2004 (<code>rstbuild</code>), legacy <code>.CHM</code>/<code>F1</code> migration, Tagged <code>PDF/UA-1</code>, multilingual <code>.vtt</code> gates, &amp; <code>_support\\</code> canvas installers.</td>
            <td><a href="https://raggiesoftstudio.com">8-Tool Suite</a> &bull; <a href="https://raggiesoftstudio.com/editions">Editions</a></td>
          </tr>
          <tr>
            <th scope="row">RaggieSoft Labs: <code>Fin#</code> &amp; <code>RaggieScript</code></th>
            <td>C# / .NET 11 &amp; Win32 C++20 VM</td>
            <td>Experimental linear-type double-entry financial compiler (<code>finsc</code>) + unified <code>RSWBC1</code> Studio scripting VM (<code>.rssc</code>).</td>
            <td><a href="/labs/finsharp">Fin# Lab</a> &bull; <a href="https://raggiesoftstudio.com/raggiescript">RaggieScript</a></td>
          </tr>
          <tr>
            <th scope="row"><code>raggiesoft/stardust-engine-cms</code></th>
            <td>PHP 8.5 OOP / MVC</td>
            <td>Zero-database JSON-routed PHP 8.5 CMS core with automated OpenGraph &amp; security headers.</td>
            <td><a href="https://github.com/raggiesoft/stardust-engine-cms">GitHub</a> &bull; <a href="https://raggiesoft.com">Live Hub</a></td>
          </tr>
          <tr>
            <th scope="row"><code>raggiesoft/storetrainer</code></th>
            <td>C# / .NET 11 + Classic VB6 Archive</td>
            <td>Desktop PC game &amp; companion trainer organizer with custom <code>.stfx</code> profile associations.</td>
            <td><a href="https://github.com/raggiesoft/storetrainer">GitHub</a> &bull; <a href="https://storetrainer.raggiesoft.com">Portal</a></td>
          </tr>
          <tr>
            <th scope="row"><code>raggiesoft/raggiesoft-deployment-tools</code></th>
            <td>Bash, PHP 8.5 CLI &amp; PowerShell</td>
            <td>Jenna multi-repo release gate, Sarah atomic Nginx pull deployer, Paige manuscript compiler, &amp; Harper audio suite.</td>
            <td><a href="https://github.com/raggiesoft/raggiesoft-deployment-tools">GitHub</a></td>
          </tr>
          <tr>
            <th scope="row"><code>raggiesoft/raggiesoft-music</code></th>
            <td>SvelteKit 2 + Svelte 5 Runes</td>
            <td>The Listening Room streaming PWA &amp; synchronized WebVTT caption playback engine.</td>
            <td><a href="https://github.com/raggiesoft/raggiesoft-music">GitHub</a> &bull; <a href="https://music.raggiesoft.com">Live App</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

/**
 * Route 5: `/ai-skills` — Machine-Readable `llms.txt`, `llms-full.txt` & `SKILL.md` Endpoints.
 */
function renderAiSkillsBody(): string {
  return `
    <section class="hero" aria-labelledby="ai-title">
      <span class="eyebrow">llms.txt • llms-full.txt • SKILL.md</span>
      <h1 id="ai-title">AI Agent Skills &amp; Machine-Readable Specifications</h1>
      <p class="lead">
        Rather than hand-maintaining documentation that drifts out of date, RaggieSoft compilers emit
        deterministic <code>llms.txt</code>, <code>llms-full.txt</code>, and <code>SKILL.md</code> files directly from
        compile-time <code>constexpr</code> schema tables—kept in 1:1 lockstep with <code>raggiesoft.dev</code>.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="/llms.txt">Open raggiesoft.dev/llms.txt</a>
        <a class="btn btn-outline" href="https://raggiesoftstudio.com/llms.txt">8-Tool Studio /llms.txt</a>
        <a class="btn btn-outline" href="/labs/finsharp/llms-finsharp.txt">Fin# Compiler Spec</a>
        <a class="btn btn-outline" href="https://raggiesoftstudio.com/installer-studio/SKILL.md">Installer SKILL.md</a>
      </div>
    </section>

    <section aria-labelledby="skill-table-heading">
      <h2 id="skill-table-heading">Direct Endpoints for Antigravity, Cursor, Claude Code &amp; Gemini CLI</h2>
      <div class="table-wrap">
        <table>
          <caption>Published RaggieSoft AI Specifications, Language Blueprints &amp; Agent Skills</caption>
          <thead>
            <tr>
              <th scope="col">Specification / Skill</th>
              <th scope="col">Canonical URL</th>
              <th scope="col">Agent Capability Unlocked</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Umbrella Engineering &amp; Labs Index (<code>llms.txt</code>)</th>
              <td><a href="/llms.txt">https://raggiesoft.dev/llms.txt</a></td>
              <td>Maps all RaggieSoft open-source repositories, 8 Studio tools, RaggieScript, and Labs in one compact token budget.</td>
            </tr>
            <tr>
              <th scope="row">RaggieSoft Studio 8-Tool Suite Index</th>
              <td><a href="https://raggiesoftstudio.com/llms.txt">https://raggiesoftstudio.com/llms.txt</a></td>
              <td>Indexes all 8 Studio tools, 4-tier <code>Community == Architect</code> licensing, and VPAT 2.5 links.</td>
            </tr>
            <tr>
              <th scope="row">Installer Studio (<code>.rsip</code> / <code>.rsis</code> / <code>SKILL.md</code>)</th>
              <td>
                <a href="https://raggiesoftstudio.com/installer-studio/llms-full.txt">llms-full.txt</a> &bull;
                <a href="https://raggiesoftstudio.com/installer-studio/SKILL.md">SKILL.md</a> &bull;
                <a href="https://raggiesoftstudio.com/installer-studio/EDITIONS_AND_RAGGIESCRIPT.md">Editions &amp; RaggieScript</a>
              </td>
              <td>Author, JSON-lint (<code>instbuild --validate --diagnostics=json</code>), and compile <code>x64</code>/<code>ARM64</code> <code>.msi</code>, <code>.msm</code>, <code>.msp</code>, <code>sfx</code>, &amp; Dual-Bar Suites.</td>
            </tr>
            <tr>
              <th scope="row">Help Studio (<code>.rshp</code> + <code>.CHM</code> / <code>.HLP</code> Rescue)</th>
              <td>
                <a href="https://raggiesoftstudio.com/help-studio/llms-full.txt">llms-full.txt</a> &bull;
                <a href="https://raggiesoftstudio.com/help-studio/SKILL.md">SKILL.md</a>
              </td>
              <td>Decompile raw <code>.chm</code> (<code>ITSF/LZX</code>) and WinHelp <code>.hlp</code>/<code>.cnt</code> archives, scrub Word <code>MsoNormal</code> HTML, and compile C++20 <code>F1</code> viewers, SDKs, web portals, &amp; VPAT 2.5.</td>
            </tr>
            <tr>
              <th scope="row">Showcase Studio (<code>.rssp</code> + <code>_support\\</code> Canvas Installers)</th>
              <td>
                <a href="https://raggiesoftstudio.com/showcase-studio/llms-full.txt">llms-full.txt</a> &bull;
                <a href="https://raggiesoftstudio.com/showcase-studio/SKILL.md">SKILL.md</a>
              </td>
              <td>Author, validate WCAG 2.2 AA (<code>RSS010</code>&ndash;<code>RSS095</code>), and compile zero-dependency static <code>/MT</code> C++20 1990s <code>.BMP</code>, <code>FluentMica</code>, Kiosk, &amp; Bespoke <code>_support\\</code> installers.</td>
            </tr>
            <tr>
              <th scope="row">Training Studio (<code>.rstp</code> SCORM 1.2 &amp; 2004)</th>
              <td>
                <a href="https://raggiesoftstudio.com/training-studio/llms-full.txt">llms-full.txt</a> &bull;
                <a href="https://raggiesoftstudio.com/training-studio/SKILL.md">SKILL.md</a>
              </td>
              <td>Compile bandwidth-resilient <code>&lt;50 KB</code> WCAG 2.2 AA SCORM packages and audit legacy third-party SCORM <code>.zip</code> archives.</td>
            </tr>
            <tr>
              <th scope="row">RaggieScript v1.0 Language &amp; Multi-Target SDK (<code>.rssc</code>)</th>
              <td>
                <a href="/raggiescript/llms-raggiescript.txt">llms-raggiescript.txt</a> &bull;
                <a href="https://raggiesoftstudio.com/raggiescript">Playground</a>
              </td>
              <td>Author, format (<code>fmt</code>), type-check (<code>RSW701</code>&ndash;<code>RSW715</code>), compile to <code>RSWBC2</code> stack bytecode, render declarative Win32 Wizard UIs, &amp; transpile SCORM <code>ES2022</code>.</td>
            </tr>
            <tr>
              <th scope="row">Fin# (Financial Sharp) Compiler Blueprint</th>
              <td><a href="/labs/finsharp/llms-finsharp.txt">https://raggiesoft.dev/labs/finsharp/llms-finsharp.txt</a></td>
              <td>Cold-start specification for building the <code>finsc</code> linear-type double-entry financial compiler &amp; Language Server.</td>
            </tr>
            <tr>
              <th scope="row">Accessibility Studio Headless SARIF 2.1.0 CLI</th>
              <td><a href="https://raggiesoftstudio.com/accessibility-studio/docs">raggiesoftstudio.com/accessibility-studio/docs</a></td>
              <td>Integrates headless WCAG 2.2 AA &amp; Section 508 DOM/source audits into agent-driven CI/CD remediation loops.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `;
}

/**
 * Route 6: `/notes` — Systems Architecture & Compiler Engineering Dispatches.
 */
function renderNotesBody(): string {
  return `
    <section class="hero" aria-labelledby="notes-title">
      <span class="eyebrow">Engineering Dispatches &amp; Systems Architecture</span>
      <h1 id="notes-title">Developer Notes &amp; Architecture Log</h1>
      <p class="lead">
        Deep-dive notes from engineering linear-type financial compilers, capability-gated C++20 bytecode VMs,
        monotonic Dual-Bar Suite installers, and 100% offline-ready accessible applications.
      </p>
    </section>

    <div class="card-grid">
      <article class="card">
        <div>
          <span class="eyebrow">Compiler Design • Linear Types</span>
          <h3>Enforcing Double-Entry Accounting at Compile Time with Fin#</h3>
          <p>
            Why mutable scalar <code>decimal</code> variables let accounting bugs slip past compilers, and how modeling
            <code>Capital&lt;TCurrency&gt;</code> as a non-droppable linear resource inside atomic <code>transaction</code> blocks
            proves conservation of capital before emitting <code>.NET</code> IL.
          </p>
        </div>
        <a class="btn btn-outline" href="/labs/finsharp">Open Fin# Compiler Lab</a>
      </article>

      <article class="card">
        <div>
          <span class="eyebrow">Bytecode VMs &amp; Custom UI</span>
          <h3>RaggieScript (.rssc) &amp; Showcase _support\ Canvas Installers</h3>
          <p>
            How a single <code>&lt;200 KB</code> static C++20 bytecode VM unifies zero-MSI setup transactions, standalone Windows
            micro-utilities, and heavily themed <code>.BMP</code> / <code>FluentMica</code> collector installers with automatic
            rollback journaling.
          </p>
        </div>
        <a class="btn btn-outline" href="https://raggiesoftstudio.com/raggiescript">Explore RaggieScript</a>
      </article>

      <article class="card">
        <div>
          <span class="eyebrow">Win32 UX &amp; Taskbar Guidelines</span>
          <h3>Why Suite Installers Must Never Reset Progress Bars Per Component</h3>
          <p>
            Replacing sawtooth <code>0%&rarr;100%&rarr;0%</code> suite progress resets with byte-weighted, high-water-mark clamped
            <strong>Overall Suite Progress</strong> (bound 1:1 to <code>ITaskbarList3</code>) above a live intra-package
            <strong>Current Component</strong> bar.
          </p>
        </div>
        <a class="btn btn-outline" href="https://raggiesoftstudio.com/installer-studio/screenshots#v060-lab-previews">See Dual-Bar Suite UI</a>
      </article>

      <article class="card">
        <div>
          <span class="eyebrow">Zero-Telemetry Cryptography • v1.0 GA Roadmap</span>
          <h3>Offline .rswlic Edition Paygating Without Activation Servers</h3>
          <p>
            How <code>v1.0.0 GA</code> transitions Technical Preview's open <code>Editions &amp; Help</code> QA switcher into
            <code>bcrypt.dll</code> asymmetric <code>.rswlic</code> license verification, <code>RSW_LICENSE_KEY</code> CI runner claims,
            Community attestation, and lower-tier QA simulation—100% air-gapped with zero phone-home calls.
          </p>
        </div>
        <a class="btn btn-outline" href="https://raggiesoftstudio.com/installer-studio/roadmap">Read v1.0 GA Licensing Spec</a>
      </article>

      <article class="card">
        <div>
          <span class="eyebrow">Win32 C++20 &amp; Windows SDK</span>
          <h3>Why Plain-Text .rsip + .rsis Beats XML &amp; Binary Installer Formats</h3>
          <p>
            Calling <code>MsiOpenDatabaseW</code> and <code>FCICreate</code> directly from static <code>/MT</code> C++20 eliminates
            seat locks while a comment-preserving AST lets GUI edits in <code>InstallerStudio.exe</code> coexist with clean
            <code>git diff</code> history and AI coding agents.
          </p>
        </div>
        <a class="btn btn-outline" href="https://raggiesoftstudio.com/installer-studio/docs">Read .rsip Specification</a>
      </article>

      <article class="card">
        <div>
          <span class="eyebrow">Desktop Architecture</span>
          <h3>Engineering 100% Offline-First Desktop Apps from First Boot</h3>
          <p>
            How RaggieSoft's 4-tier asset resolver combines installed content packs, local caches, bundled <code>OfflineSeed</code>
            catalogs, and CDN streaming so every desktop app renders covers, TOCs, and synchronized lyrics with Wi-Fi unplugged.
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
    seoTitle: 'raggiesoft.dev — Open-Source Compilers, Studio & Labs',
    seoDescription:
      'Official RaggieSoft engineering portal: 8-tool RaggieSoft Studio, RaggieScript (.rssc), Fin# linear-type compiler lab, Stardust CMS, and llms.txt skills.',
    renderBody: renderHomeBody
  },
  {
    path: '/labs',
    navLabel: 'Labs',
    seoTitle: 'RaggieSoft Labs — Fin#, RaggieScript & Compiler R&D',
    seoDescription:
      'Experimental R&D incubator at RaggieSoft: Fin# (Financial Sharp) linear-type double-entry compiler, RaggieScript bytecode VM, and _support\\ packagers.',
    renderBody: renderLabsBody
  },
  {
    path: '/labs/finsharp',
    navLabel: 'Fin# Lab',
    seoTitle: 'Fin# (Financial Sharp) — Linear-Type Accounting Compiler',
    seoDescription:
      'Explore Fin# (FinSharp): RaggieSoft Labs linear-type .NET/Roslyn financial language catching unbalanced double-entry ledgers at compile time (FIN0001).',
    renderBody: renderFinSharpLabBody
  },
  {
    path: '/repositories',
    navLabel: 'GitHub Repos',
    seoTitle: 'Open-Source GitHub Repositories | raggiesoft.dev',
    seoDescription:
      'Browse MIT-licensed RaggieSoft repositories on GitHub: 8-tool RaggieSoft Studio, Installer Studio (C++20), Accessibility Studio, and Fin# compiler R&D.',
    renderBody: renderReposBody
  },
  {
    path: '/ai-skills',
    navLabel: 'llms.txt & AI Skills',
    seoTitle: 'AI Agent Skills, llms.txt & SKILL.md | raggiesoft.dev',
    seoDescription:
      'Machine-readable llms.txt, llms-full.txt, and SKILL.md endpoints for RaggieSoft Studio, RaggieScript, Training Studio, and Fin# compiler specifications.',
    renderBody: renderAiSkillsBody
  },
  {
    path: '/notes',
    navLabel: 'Dev Notes',
    seoTitle: 'Systems Architecture & Developer Notes | raggiesoft.dev',
    seoDescription:
      'Engineering dispatches on Fin# linear-type compilers, RaggieScript bytecode VMs, monotonic Dual-Bar Suite progress, and Win32 C++20 MSI packaging.',
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
          <a class="btn btn-outline" href="/labs">Explore RaggieSoft Labs &amp; Fin#</a>
          <a class="btn btn-outline" href="/repositories">Browse GitHub Repositories</a>
        </div>
      </section>
    `;

  const html = `
    <header class="site-header" data-theme="dark">
      <div class="header-inner">
        <a class="brand-link" href="/">
          <span class="brand-title">raggiesoft.dev</span>
          <span class="brand-sub">Open-Source Engineering • Compilers • Studio • Labs</span>
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
              <li><a class="nav-link" href="https://raggiesoftstudio.com">RaggieSoft Studio</a></li>
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
          <a href="https://raggiescript.raggiesoft.dev">raggiescript.raggiesoft.dev</a>
          <a href="https://finsharp.raggiesoft.dev">finsharp.raggiesoft.dev</a>
          <a href="/labs">RaggieSoft Labs</a>
          <a href="/labs/finsharp">Fin# (Financial Sharp) Lab</a>
          <a href="https://books.raggiesoft.com/aubrie">The Eleventh Child (/books/aubrie)</a>
          <a href="/repositories">GitHub Repositories</a>
          <a href="/ai-skills">llms.txt &amp; AI Skills</a>
          <a href="/notes">Dev Notes</a>
          <a href="/llms.txt">/llms.txt</a>
          <a href="https://raggiesoftstudio.com">RaggieSoft Studio (8 Tools)</a>
          <a href="https://raggiesoftstudio.com/editions">Studio Editions</a>
          <a href="https://raggiesoftstudio.com/raggiescript">RaggieScript Playground</a>
          <a href="https://raggiesoftstudio.com/installer-studio">Installer Studio (v0.5.0)</a>
          <a href="https://raggiesoftstudio.com/accessibility-studio">Accessibility Studio (v1.0.0)</a>
          <a href="https://raggiesoft.com">RaggieSoft Consumer Hub</a>
          <a href="https://michaelpragsdale.com">Michael P. Ragsdale Portfolio</a>
          <a href="https://raggiesoft.com/about/privacy">Privacy Policy</a>
          <a href="https://raggiesoft.com/about/terms">Terms of Service</a>
          <a href="https://raggiesoft.com/about/ai-disclaimer">AI &amp; Creative Process | RaggieSoft Governance</a>
        </div>
        <p>
          Copyright &copy; 2026 Michael P. Ragsdale / RaggieSoft. All RaggieSoft code is open source under the <strong>MIT License</strong>; all creative and narrative works are licensed under <strong>CC BY-SA 4.0</strong>.
        </p>
        <p class="disclaimer-box">${FICTITIOUS_DISCLAIMER}</p>
      </div>
    </footer>
  `;

  return { html };
}
