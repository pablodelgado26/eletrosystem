import Image from "next/image"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Marca */}
          <div className="footer-brand">
            <div className="footer-brand-name">
              <span style={{ fontSize: "1.4rem", filter: "drop-shadow(0 0 6px var(--yellow))" }}>⚡</span>
              <span>Eletro<span className="logo-highlight">System</span></span>
            </div>
            <p>
              Unindo tecnologia e engenharia elétrica para transformar
              o seu negócio. Instalações seguras, sites modernos e apps
              que encantam.
            </p>
            <div className="footer-socials">
              <a
                href="https://www.instagram.com/eletrosystembrasil?igsh=M3NodnZoeTB0NTNr"
                className="social-btn"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/image/instagram.png"
                  alt="Instagram"
                  width={18}
                  height={18}
                  className="social-icon"
                />
              </a>


              <a
                href="https://wa.me/5519992813822"
                className="social-btn"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/image/whatsapp.png"
                  alt="WhatsApp"
                  width={18}
                  height={18}
                  className="social-icon"
                />
              </a>
            </div>
          </div>

          {/* Serviços */}
          <div className="footer-col">
            <h4>Serviços</h4>
            <ul className="footer-links">
              <li><a href="#servicos">Instalações Elétricas</a></li>
              <li><a href="#servicos">Criação de Sites</a></li>
              <li><a href="#servicos">Desenvolvimento de Apps</a></li>
              <li><a href="#servicos">Manutenção Elétrica</a></li>
              <li><a href="#servicos">Automação Residencial</a></li>
            </ul>
          </div>

          {/* Empresa */}
          <div className="footer-col">
            <h4>Empresa</h4>
            <ul className="footer-links">
              <li><a href="#sobre">Sobre Nós</a></li>
              <li><a href="#equipe">Nossa Equipe</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div className="footer-col">
            <h4>Contato</h4>
            <ul className="footer-links">
              <li>
                <a href="mailto:eletrosystembr@gmail.com">
                  eletrosystembr@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+5519992813822">
                  📞 (19) 99928-13822
                </a>
              </li>
              <li>
                <a href="#contato">
                  📍 Campinas, SP
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/eletrosystembrasil?igsh=M3NodnZoeTB0NTNr"
                  className="footer-contact-social"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/image/instagram.png"
                    alt="Instagram"
                    width={18}
                    height={18}
                    className="social-icon"
                  />
                  @eletrosystembrasil
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5519992813822"
                  className="footer-contact-social"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/image/whatsapp.png"
                    alt="WhatsApp"
                    width={18}
                    height={18}
                    className="social-icon"
                  />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="footer-bottom">
          <p>© {year} EletroSystem. Todos os direitos reservados.</p>
          <div className="footer-bottom-links">
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
