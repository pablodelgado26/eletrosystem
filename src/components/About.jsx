const features = [
  {
    icon: "⚡",
    title: "Instalações Seguras",
    desc: "Projetos elétricos com laudos e certificações",
  },
  {
    icon: "💻",
    title: "Dev Moderno",
    desc: "Sites e apps com as melhores tecnologias",
  },
  {
    icon: "🛡️",
    title: "Qualidade Garantida",
    desc: "Suporte e garantia em todos os serviços",
  },
  {
    icon: "🚀",
    title: "Entrega Ágil",
    desc: "Prazos cumpridos sem abrir mão da qualidade",
  },
  {
    icon: "🔧",
    title: "Reparo de Dispositivos",
    desc: "Concerto de celular, notebooks e PCs",
  },
]

export default function About() {
  return (
    <section className="section" id="sobre">
      <div className="container">
        <div className="about-grid">

          {/* Visual */}
          <div className="about-visual">
            <div className="about-ring about-ring-2"></div>
            <div className="about-ring about-ring-1"></div>
            <div className="about-icon-main">⚡</div>
            <div className="about-float-card about-float-card-1">
              <span className="float-dot"></span>
              Instalações Certificadas
            </div>
            <div className="about-float-card about-float-card-2">
              <span className="float-dot"></span>
              Desenvolvimento Full-Stack
            </div>
            <div className="about-float-card about-float-card-3">
              <span className="float-dot"></span>
              Apps iOS &amp; Android
            </div>
          </div>

          {/* Conteúdo */}
          <div className="about-content">
            <div className="section-header" style={{ textAlign: "left", marginBottom: "1.5rem" }}>
              <p className="section-tag">Quem Somos</p>
              <h2 className="section-title">
                Uma empresa que une <span className="highlight">energia</span> e <span className="highlight">tecnologia</span>
              </h2>
            </div>

            <p>
              A <strong style={{ color: "var(--white)" }}>EletroSystem</strong> é uma empresa inovadora
              fundada por especialistas em engenharia da computação, tecnologia da informação e
              eletroeletrônica. Surgimos da visão de que instalações elétricas e soluções digitais
              podem caminhar juntas.
            </p>
            <p>
              Atendemos clientes residenciais, comerciais e industriais, entregando projetos
              elétricos com total segurança e conformidade com as normas ABNT, além de websites
              responsivos, aplicativos mobile desenvolvidos com as tecnologias mais modernas
              do mercado e serviços especializados de concerto de celular, notebooks e PCs.
            </p>
            <p>
              Nossa equipe multidisciplinar garante que cada projeto seja tratado com
              excelência técnica, comprometimento e foco total na satisfação do cliente.
            </p>

            <div className="about-features">
              {features.map((f) => (
                <div className="about-feature" key={f.title}>
                  <span className="about-feature-icon">{f.icon}</span>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
