const services = [
  {
    icon: "⚡",
    title: "Instalações Elétricas",
    desc: "Projetos elétricos completos para residências, comércios e indústrias, com segurança e conformidade às normas ABNT NBR 5410.",
    items: [
      "Instalações residenciais e comerciais",
      "Painéis elétricos e quadros de distribuição",
      "SPDA (para-raios) e aterramento",
      "Laudos e certificações NR-10",
      "Manutenção preventiva e corretiva",
      "Automação residencial e industrial",
    ],
  },
  {
    icon: "🌐",
    title: "Criação de Sites",
    desc: "Desenvolvimento de websites modernos, responsivos e otimizados para SEO, que convertem visitantes em clientes.",
    items: [
      "Sites institucionais e portfólios",
      "Landing pages de alta conversão",
      "Lojas virtuais (e-commerce)",
      "Sistemas web personalizados",
      "SEO e performance otimizados",
      "Hospedagem e manutenção",
    ],
  },
  {
    icon: "📱",
    title: "Desenvolvimento de Apps",
    desc: "Aplicativos iOS e Android nativos ou híbridos, desde o conceito até a publicação nas lojas.",
    items: [
      "Apps iOS e Android",
      "React Native e Flutter",
      "Integração com APIs e backends",
      "UX/UI design profissional",
      "Publicação na App Store e Play Store",
      "Suporte e atualizações pós-lançamento",
    ],
  },
  {
    icon: "🔧",
    title: "Concerto de Celular, Notebooks e PCs",
    desc: "Reparos especializados em dispositivos móveis e computadores, com diagnóstico rápido e soluções eficientes.",
    items: [
      "Reparo e manutenção de celulares",
      "Conserto de notebooks e computadores",
      "Limpeza e otimização de hardware",
      "Troca de peças e componentes",
      "Recuperação de dados",
      "Diagnóstico técnico completo",
    ],
  },
]

export default function Services() {
  return (
    <section className="section section-alt" id="servicos">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">O que fazemos</p>
          <h2 className="section-title">
            Nossos <span className="highlight">Serviços</span>
          </h2>
          <div className="divider"></div>
          <p className="section-desc" style={{ marginTop: "1.5rem" }}>
            Soluções completas para o seu negócio, desde a infraestrutura
            elétrica até a presença digital.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className="service-list">
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
