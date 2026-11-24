/**
 * ============================================================================
 * FILE: src/main.ts
 * PROPERTY: https://raggiesoft.dev (RaggieSoft Developer & Open-Source Hub)
 * LICENSE: MIT License (Copyright (c) 2026 Michael P. Ragsdale / RaggieSoft)
 * ============================================================================
 * PLAIN-ENGLISH OVERVIEW FOR 100-LEVEL READERS:
 *   Boots Alpine.js on pre-rendered static HTML pages so category filters on
 *   `raggiesoft.dev` respond instantly without client-side SPA delays!
 * ============================================================================
 */

import Alpine from 'alpinejs';
import { renderDevPage } from './routes';

declare global {
  interface Window {
    Alpine: typeof Alpine;
  }
}

const appEl = document.getElementById('app');
if (appEl && appEl.innerHTML.includes('SSR_OUTLET')) {
  const cleanPath = window.location.pathname.replace(/\/+$/, '') || '/';
  appEl.innerHTML = renderDevPage(cleanPath).html;
}

window.Alpine = Alpine;
Alpine.start();
