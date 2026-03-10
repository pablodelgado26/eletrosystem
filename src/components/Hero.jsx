export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>⚡</span> Tecnologia &amp; Eletricidade
          </div>

          <h1 className="hero-title">
            Soluções que <span className="highlight">Energizam</span>{" "}
            o seu Negócio
          </h1>

          <p className="hero-subtitle">
            Combinamos engenharia elétrica e tecnologia de ponta para entregar
            instalações seguras, sites modernos e aplicativos sob medida. Da
            tomada ao código, a EletroSystem cuida de tudo.
          </p>

          <div className="hero-ctas">
            <a href="#servicos" className="btn btn-primary">
              Nossos Serviços
            </a>
            <a href="#contato" className="btn btn-outline">
              Fale Conosco
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projetos entregues</span>
            </div>
            <span className="stat-sep">|</span>
            <div className="hero-stat">
              <span className="stat-number">4</span>
              <span className="stat-label">Especialistas</span>
            </div>
            <span className="stat-sep">|</span>
            <div className="hero-stat">
              <span className="stat-number">3</span>
              <span className="stat-label">Áreas de atuação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
