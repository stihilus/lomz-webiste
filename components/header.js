class SiteHeader extends HTMLElement {
  connectedCallback() {
    const isAbout = location.pathname.includes('about');
    this.innerHTML = `
      <nav class="site-nav container">
        <a class="logo" href="./" aria-label="lomz — home">
          <svg viewBox="0 0 101 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
            <path d="M0 24V0L24 24H0Z"/>
            <path d="M100.646 24V0L76.6455 24H100.646Z"/>
            <path d="M34.4512 24C41.0786 24 46.4512 18.6274 46.4512 12C46.4512 5.37258 41.0786 0 34.4512 0C27.8238 0 22.4512 5.37258 22.4512 12C22.4512 18.6274 27.8238 24 34.4512 24Z"/>
            <path d="M73.5488 0H49.5488V24H73.5488V0Z"/>
          </svg>
        </a>
        <div class="nav-links">
          <a href="./"${!isAbout ? ' aria-current="page"' : ''}>work</a>
          <a href="./about.html"${isAbout ? ' aria-current="page"' : ''}>about</a>
          <button class="theme-toggle" type="button" aria-label="Toggle dark mode" title="Toggle dark mode">
            <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          </button>
        </div>
      </nav>
    `;

    this.querySelector('.theme-toggle').addEventListener('click', () => {
      const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }
}
customElements.define('site-header', SiteHeader);
