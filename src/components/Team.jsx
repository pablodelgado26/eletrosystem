import Image from "next/image"

const members = [
  {
    name: "Pablo Delgado",
    role: "Fundador & Dev Full-Stack",
    image: "/team/pablo.jpeg",
    initials: "PD",
    color: "#FFD700",
    bio: "Especialista em desenvolvimento full-stack e arquitetura de sistemas. Pablo lidera os projetos de tecnologia da EletroSystem com expertise em múltiplas linguagens e frameworks modernos, garantindo soluções escaláveis e de alta performance.",
    badges: [
      "Engenharia da Computação",
      "Tecnologia da Informação",
      "Téc. Desenvolvimento de Sistemas",
    ],
  },
  {
    name: "Miguel Sarti",
    role: "Desenvolvedor Full-Stack",
    image: "/team/miguel.jpeg",
    initials: "MS",
    color: "#4FC3F7",
    bio: "Com sólida formação em engenharia da computação, Miguel é responsável pelo desenvolvimento de aplicações web e mobile, trazendo soluções inovadoras e interfaces modernas que encantam os usuários.",
    badges: [
      "Engenharia da Computação",
      "Téc. Desenvolvimento de Sistemas",
    ],
  },
  {
    name: "Lucas Zani",
    role: "Desenvolvedor & Arquiteto de Sistemas",
    image: "/team/lucas.jpeg",
    initials: "LZ",
    color: "#81C784",
    bio: "Lucas combina profundo conhecimento em engenharia da computação com habilidades técnicas avançadas para criar sistemas robustos e eficientes, sempre garantindo a qualidade e a manutenibilidade dos projetos entregues.",
    badges: [
      "Engenharia da Computação",
      "Téc. Desenvolvimento de Sistemas",
    ],
  },
  {
    name: "Antonio Pacheco",
    role: "Especialista em Eletroeletrônica",
    image: "/team/antonio.jpeg",
    initials: "AP",
    color: "#FF8A65",
    bio: "Especialista em instalações elétricas e sistemas eletroeletrônicos, Antonio é o responsável por toda a infraestrutura elétrica da EletroSystem. Seu rigor técnico garante instalações seguras, eficientes e em conformidade com todas as normas vigentes.",
    badges: [
      "Téc. em Eletroeletrônica",
    ],
  },
  {
    name: "Cauã Carvalho",
    role: "Técnico em Hardware e Desenvolvimento",
    image: "/team/caua.jpeg",
    initials: "CC",
    color: "#BA68C8",
    bio: "Técnico especializado em desenvolvimento de sistemas e hardware, Cauã é responsável pela manutenção e reparo de dispositivos eletrônicos, celulares, notebooks e PCs. Sua expertise técnica garante diagnósticos precisos e soluções rápidas para todos os problemas de hardware e software.",
    badges: [
      "Técnico em Desenvolvimento de Sistemas",
      "Especialista em Hardware",
    ],
  },
]

export default function Team() {
  return (
    <section className="section" id="equipe">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Nossa Equipe</p>
          <h2 className="section-title">
            Conheça os <span className="highlight">Especialistas</span>
          </h2>
          <div className="divider"></div>
          <p className="section-desc" style={{ marginTop: "1.5rem" }}>
            Profissionais qualificados e apaixonados pelo que fazem, prontos
            para transformar suas ideias em realidade.
          </p>
        </div>

        <div className="team-grid">
          {members.map((member) => (
            <div className="team-card" key={member.name}>
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={340}
                className="team-avatar-img"
              />
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
                <div className="team-badges">
                  {member.badges.map((b) => (
                    <span className="badge" key={b}>{b}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
