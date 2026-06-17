class SiteFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();
    this.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <table class="footer-table" aria-label="Contacts and links">
            <tbody>
              <tr>
                <td class="footer-cell-brand">
                  <p><strong>Lomz</strong><br>Vukasin Stancevic — explorer at the intersection of art and technology.<br>Product design, generative art, multimedia.</p>
                  <p>Belgrade, Serbia<br>© ${year}</p>
                  <p>
                    <a href="mailto:stihilus@gmail.com">stihilus@gmail.com</a> —
                    <a href="https://www.instagram.com/lomz.art/" target="_blank" rel="noopener noreferrer">Instagram</a> —
                    <a href="https://x.com/lomzart" target="_blank" rel="noopener noreferrer">Twitter</a>
                  </p>
                </td>
                <td class="footer-cell-nav">
                  <ul>
                    <li><a href="./">Work</a></li>
                    <li><a href="./about.html">About</a></li>
                    <li>&nbsp;</li>
                    <li><a href="https://www.behance.net/lomz" target="_blank" rel="noopener noreferrer">Behance</a></li>
                    <li><a href="https://dribbble.com/lomzart" target="_blank" rel="noopener noreferrer">Dribbble</a></li>
                    <li><a href="https://www.youtube.com/@lomzart" target="_blank" rel="noopener noreferrer">Youtube</a></li>
                    <li><a href="https://github.com/stihilus" target="_blank" rel="noopener noreferrer">Github</a></li>
                    <li><a href="https://www.fxhash.xyz/u/lomz" target="_blank" rel="noopener noreferrer">fxHash</a></li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </footer>
    `;
  }
}
customElements.define('site-footer', SiteFooter);
