"use client"

import { useState } from "react"

const contactItems = [
  { icon: "📧", label: "E-mail", value: "contato@eletrosystem.com.br" },
  { icon: "📞", label: "Telefone", value: "(11) 9 9840-8572" },
  { icon: "📍", label: "Localização", value: "São Paulo, SP — Brasil" },
  { icon: "⏰", label: "Horário", value: "Seg–Sex, das 8h às 18h" },
]

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="section section-alt" id="contato">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Entre em Contato</p>
          <h2 className="section-title">
            Vamos <span className="highlight">Conversar</span>?
          </h2>
          <div className="divider"></div>
          <p className="section-desc" style={{ marginTop: "1.5rem" }}>
            Conte-nos sobre seu projeto e nossa equipe entrará em contato
            em até 24 horas úteis.
          </p>
        </div>

        <div className="contact-wrapper">
          {/* Info */}
          <div className="contact-info">
            <h3>Informações de Contato</h3>
            <p>
              Estamos prontos para atender você e oferecer a melhor solução
              para suas necessidades em elétrica, web e mobile.
            </p>
            <div className="contact-items">
              {contactItems.map((item) => (
                <div className="contact-item" key={item.label}>
                  <div className="contact-item-icon">{item.icon}</div>
                  <div>
                    <p className="contact-item-label">{item.label}</p>
                    <p className="contact-item-value">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formulário */}
          <div className="contact-form">
            {sent ? (
              <div className="form-success">
                <div className="success-icon">✅</div>
                <h4>Mensagem enviada!</h4>
                <p>Obrigado pelo contato. Retornaremos em breve.</p>
              </div>
            ) : (
              <>
                <h3>Envie uma Mensagem</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Nome completo</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Seu nome"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">E-mail</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Telefone</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(11) 9 9999-9999"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">Serviço de interesse</label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Selecione...</option>
                        <option value="eletrica">Instalações Elétricas</option>
                        <option value="site">Criação de Site</option>
                        <option value="app">Desenvolvimento de App</option>
                        <option value="combo">Pacote Completo</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Mensagem</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Descreva seu projeto ou dúvida..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                    Enviar Mensagem ✉️
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
