class SiteFooter extends HTMLElement {
  connectedCallback() {
    const links = [
      ['Instagram', 'https://www.instagram.com/lomz.art/'],
      ['Behance', 'https://www.behance.net/lomz'],
      ['Dribbble', 'https://dribbble.com/lomzart'],
      ['Twitter', 'https://x.com/lomzart'],
      ['Youtube', 'https://www.youtube.com/@lomzart'],
      ['Github', 'https://github.com/stihilus'],
      ['fxHash', 'https://www.fxhash.xyz/u/lomz'],
    ];
    const year = new Date().getFullYear();
    this.innerHTML = `
      <footer class="site-footer">
        <div class="container footer-inner">
          <div class="footer-brand">
            <span class="footer-logo">
              <svg viewBox="0 0 101 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="lomz">
                <path d="M0 24V0L24 24H0Z"/>
                <path d="M100.646 24V0L76.6455 24H100.646Z"/>
                <path d="M34.4512 24C41.0786 24 46.4512 18.6274 46.4512 12C46.4512 5.37258 41.0786 0 34.4512 0C27.8238 0 22.4512 5.37258 22.4512 12C22.4512 18.6274 27.8238 24 34.4512 24Z"/>
                <path d="M73.5488 0H49.5488V24H73.5488V0Z"/>
              </svg>
            </span>
            <span class="caption">Art × Technology</span>
          </div>
          <nav class="footer-social">
            ${links.map(([label, url]) =>
              `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`
            ).join('')}
          </nav>
          <div class="footer-bottom">
            <span class="caption">© ${year} Vukasin / Lomz · Belgrade</span>
            <a class="footer-email" href="mailto:stihilus@gmail.com">stihilus@gmail.com ↗</a>
          </div>
        </div>
      </footer>
    `;
  }
}
customElements.define('site-footer', SiteFooter);
