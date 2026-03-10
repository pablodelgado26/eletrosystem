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
                href="https://instagram.com"
                className="social-btn"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                📸
              </a>
              <a
                href="https://linkedin.com"
                className="social-btn"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                💼
              </a>
              <a
                href="https://github.com/pablodelgado26/eletrosystem"
                className="social-btn"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                🐙
              </a>
              <a
                href="https://wa.me/5511998408572"
                className="social-btn"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬
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
                <a href="mailto:contato@eletrosystem.com.br">
                  📧 contato@eletrosystem.com.br
                </a>
              </li>
              <li>
                <a href="tel:+5511998408572">
                  📞 (11) 9 9840-8572
                </a>
              </li>
              <li>
                <a href="#contato">
                  📍 São Paulo, SP
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
