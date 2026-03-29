// src/pages/Eventos.js
import React from 'react';
import './Eventos.css';

/**
 * Componente Eventos - Premium Design
 * Apresenta todos os programas e atividades com design premium
 */
function Eventos() {
  const eventos = [
    {
      icon: '🐴',
      title: 'Aulas de Equitação',
      description: 'Aulas personalizadas para todas as idades e níveis, desde iniciantes até avançados.',
      details: ['Aulas privadas e grupos', 'Instrutor qualificado', 'Cavalos treinados', 'Ambiente seguro']
    },
    {
      icon: '💚',
      title: 'Equitação Terapêutica',
      description: 'Sessões terapêuticas que promovem bem-estar físico, emocional e psicológico.',
      details: ['Programa personalizado', 'Terapeuta experiente', 'Cavalos selecionados', 'Ambiente calmo']
    },
    {
      icon: '👶',
      title: 'Equitação Adaptada',
      description: 'Programas especializados para crianças com necessidades especiais ou dificuldades de aprendizagem.',
      details: ['Equipa treina', 'Ambiente inclusivo', 'Acompanhamento individual', 'Cavalos dóceis']
    },
    {
      icon: '🎂',
      title: 'Festas de Aniversário',
      description: 'Celebrate o aniversário do seu filho com atividades equestres, jogos e natureza.',
      details: ['Atividades com cavalos', 'Sala para festas', 'Lanche incluído', 'Memórias inesquecíveis']
    },
    {
      icon: '🌳',
      title: 'Passeios a Cavalo',
      description: 'Experiências na natureza, passeios relaxantes rodeado de paisagens naturais.',
      details: ['Passeios guiados', 'Paisagens naturais', 'Ritmo adaptado', 'Segurança garantida']
    },
    {
      icon: '💫',
      title: 'Programas Sazonais',
      description: 'Créches equestres, acampamentos de verão e programas especiais para férias escolares.',
      details: ['Programas flexíveis', 'Turmas reduzidas', 'Atividades variadas', 'Lunch incluído']
    }
  ];

  return (
    <div className="eventos-container">
      {/* HERO SECTION */}
      <section className="hero-section-eventos">
        <div className="hero-visual">
          <img 
            src="https://images.unsplash.com/photo-1519104645147-05f90f34ec30?w=1600&q=90" 
            alt="Atividades e Programas"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content-eventos">
          <div className="hero-text-wrapper">
            <h1>Atividades e Programas</h1>
            <p>Experiências equestres, terapêuticas e educativas para todas as idades</p>
          </div>
        </div>
      </section>

      {/* PROGRAMAS GRID */}
      <section className="programas-section">
        <div className="container">
          <h2 className="section-title">Nossos Programas</h2>
          <div className="eventos-grid">
            {eventos.map((evento, index) => (
              <div key={index} className="evento-card">
                <div className="evento-icon">{evento.icon}</div>
                <h3>{evento.title}</h3>
                <p className="evento-description">{evento.description}</p>
                <ul className="evento-details">
                  {evento.details.map((detail, idx) => (
                    <li key={idx}>✓ {detail}</li>
                  ))}
                </ul>
                <a href="https://buk.pt/casa-da-quinta-1717" target="_blank" rel="noopener noreferrer" className="button-style secondary">
                  Marcar
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAMADA FINAL */}
      <section className="final-cta-section">
        <div className="container">
          <h2>Pronto para Participar?</h2>
          <p className="cta-text">
            Escolha o programa que melhor se adequa a você e comece sua jornada com a Casa da Quintã 1717
          </p>
          <a href="https://buk.pt/casa-da-quinta-1717" target="_blank" rel="noopener noreferrer" className="button-style primary">
            Marcar Agora
          </a>
        </div>
      </section>
    </div>
  );
}

export default Eventos;
