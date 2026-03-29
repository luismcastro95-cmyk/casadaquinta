// src/pages/Contato.js
import React, { useState } from 'react';
import './Contato.css';

/**
 * Componente Contato - Premium Design
 * Formulário de contato, informações e localização
 */
function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    { icon: '📞', label: 'Telefone', value: '933 363 859' },
    { icon: '📧', label: 'Email', value: 'casadaquinta1717@gmail.com' },
    { icon: '📍', label: 'Localização', value: 'R. Da Quintão, 4795-812 Vilarinho' },
    { icon: '🕐', label: 'Horário', value: 'Seg-Sab 09:00-21:00 | Dom 09:00-13:00' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados de contato:', formData);
    setSubmitted(true);
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: ''
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contato-container">
      {/* HERO SECTION */}
      <section className="hero-section-contato">
        <div className="hero-visual">
          <img 
            src="https://images.unsplash.com/photo-1551632786-de41ffe0f1d4?w=1600&q=90" 
            alt="Contacte-nos"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content-contato">
          <div className="hero-text-wrapper">
            <h1>Contacte-nos</h1>
            <p>Ficaremos felizes em responder suas dúvidas e agendar sua visita</p>
          </div>
        </div>
      </section>

      {/* INFORMAÇÕES DE CONTACTO */}
      <section className="info-section">
        <div className="container">
          <div className="info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="info-card">
                <div className="info-icon">{info.icon}</div>
                <h3>{info.label}</h3>
                <p>{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section className="form-section alt-section">
        <div className="container form-wrapper">
          <div className="form-content">
            <h2>Envie-nos uma Mensagem</h2>
            <p className="form-description">
              Tem alguma pergunta? Deixe seus dados e nossa equipa entrará em contato dentro de 24 horas.
            </p>

            {submitted && (
              <div className="success-message">
                ✓ Obrigado pela sua mensagem, {formData.nome}! Entraremos em contacto brevemente.
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nome">Nome Completo *</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="telefone">Telefone</label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    placeholder="(+351) 9XX XXX XXX"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="assunto">Assunto</label>
                  <input
                    type="text"
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleInputChange}
                    placeholder="Ex: Questão sobre aulas"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="mensagem">Mensagem *</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  placeholder="Conte-nos como podemos ajudá-lo..."
                  rows="6"
                  required
                />
              </div>

              <button type="submit" className="button-style primary">Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA COM BUK */}
      <section className="final-cta-section">
        <div className="container">
          <h2>Agende Diretamente</h2>
          <p className="cta-text">
            Para agendamentos rápidos e diretos, visite nosso sistema de reservas
          </p>
          <a href="https://buk.pt/casa-da-quinta-1717" target="_blank" rel="noopener noreferrer" className="button-style primary">
            Ir para Reservas
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contato;
