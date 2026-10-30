import { LOG, formatLogDate } from '../data/log.js';

const belgradeTime = () => new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit', minute: '2-digit', hourCycle: 'h23', timeZone: 'Europe/Belgrade',
}).format(new Date());

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
                  <p>Belgrade, Serbia · <span class="footer-clock">${belgradeTime()}</span><br>© ${year} · <a href="./log.html">updated ${formatLogDate(LOG[0].date)}</a></p>
                  <p>
                    <a href="mailto:stihilus@gmail.com">stihilus@gmail.com</a> —
                    <a href="https://www.instagram.com/lomz.art/" target="_blank" rel="noopener noreferrer">Instagram</a> —
                    <a href="https://x.com/lomzart" target="_blank" rel="noopener noreferrer">Twitter</a>
                  </p>
                </td>
                <td class="footer-cell-nav">
                  <ul>
                    <li><a href="./">Work</a></li>
                    <li><a href="./generative-art.html">Generative art</a></li>
                    <li><a href="./blog/">Blog</a></li>
                    <li><a href="./about.html">About</a></li>
                    <li><a href="./log.html">Log</a></li>
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

    const clock = this.querySelector('.footer-clock');
    this.timer = setInterval(() => { clock.textContent = belgradeTime(); }, 15000);
  }

  disconnectedCallback() {
    clearInterval(this.timer);
  }
}
customElements.define('site-footer', SiteFooter);
