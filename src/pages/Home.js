// src/pages/Home.js
import React from 'react';
import './Home.css';

/**
 * Componente Home - Premium Design (Equitours-inspired)
 * Foco em experiência, imagens fortes, minimalismo elegante
 */
function Home() {
  return (
    <div className="home-container">
      {/* HERO SECTION - Grande, minimalista, emocional */}
      <section className="hero-section">
        <div className="hero-visual">
          <img 
            src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1600&q=90" 
            alt="Cavalos na Casa da Quintã 1717"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text-wrapper">
            <h1 className="hero-title">Experiências Equestres Autênticas</h1>
            <p className="hero-subtitle">Bem-estar, Aprendizagem e Conexão com a Natureza na Casa da Quintã 1717</p>
            <a href="https://buk.pt/casa-da-quinta-1717" target="_blank" rel="noopener noreferrer" className="button-style primary">
              Marcar Aula
            </a>
          </div>
        </div>
      </section>

      {/* APRESENTAÇÃO */}
      <section className="presentation-section">
        <div className="container">
          <div className="presentation-grid">
            <div className="presentation-text">
              <h2>Casa da Quintã 1717</h2>
              <p className="intro-text">
                Um espaço premium dedicado ao bem-estar e desenvolvimento pessoal através da equitação e conexão autêntica com a natureza.
              </p>
              <p>
                Na Casa da Quintã 1717, acreditamos que os cavalos têm o poder de transformar vidas. 
                Oferecemos aulas profissionais, programas de equitação terapêutica e experiências memoráveis 
                para crianças, jovens e adultos de todas as idades e níveis de experiência.
              </p>
              <p>
                Com uma equipa de instrutores certificados e cavalos cuidadosamente selecionados, 
                proporcionamos um ambiente seguro, acolhedor e transformador.
              </p>
            </div>

            <div className="presentation-image">
              <img 
                src="https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&q=90" 
                alt="Crianças aprendendo equitação"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ATIVIDADES PRINCIPAIS */}
      <section className="activities-section alt-section">
        <div className="container">
          <h2 className="section-title">Nossas Atividades</h2>
          <div className="activities-grid">
            {/* Aulas */}
            <article className="activity-card">
              <div className="activity-image">
                <img 
                  src="https://images.unsplash.com/photo-1519104645147-05f90f34ec30?w=500&q=90" 
                  alt="Aulas de equitação"
                />
              </div>
              <div className="activity-content">
                <h3>Aulas de Equitação</h3>
                <p>Desenvolvemos técnica, segurança e confiança em ambiente profissional. Iniciantes bem-vindos. Todas as idades.</p>
                <a href="https://buk.pt/casa-da-quinta-1717" target="_blank" rel="noopener noreferrer" className="button-style secondary">
                  Agendar
                </a>
              </div>
            </article>

            {/* Terapia */}
            <article className="activity-card">
              <div className="activity-image">
                <img 
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&q=90" 
                  alt="Equitação terapêutica"
                />
              </div>
              <div className="activity-content">
                <h3>Equitação Terapêutica</h3>
                <p>Programas especializados para bem-estar físico, emocional e psicológico. Recomendado para desenvolvimento pessoal.</p>
                <a href="https://buk.pt/casa-da-quinta-1717" target="_blank" rel="noopener noreferrer" className="button-style secondary">
                  Solicitar Info
                </a>
              </div>
            </article>

            {/* Festas */}
            <article className="activity-card">
              <div className="activity-image">
                <img 
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&q=90" 
                  alt="Festas de aniversário"
                />
              </div>
              <div className="activity-content">
                <h3>Festas de Aniversário</h3>
                <p>Celebrações memoráveis rodeadas de cavalos, natureza e diversão. Experiências únicas para crianças.</p>
                <a href="https://buk.pt/casa-da-quinta-1717" target="_blank" rel="noopener noreferrer" className="button-style secondary">
                  Planejar Festa
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="values-section">
        <div className="container">
          <div className="values-content">
            <h2>Princípios que nos Guiam</h2>
            <div className="values-list">
              <div className="value-item">
                <h4>Bem-estar</h4>
                <p>Experiências que promovem saúde física, emocional e psicológica</p>
              </div>
              <div className="value-item">
                <h4>Autenticidade</h4>
                <p>Conexão genuína com cavalos e natureza, longe de artificialidades</p>
              </div>
              <div className="value-item">
                <h4>Profissionalismo</h4>
                <p>Instrutores certificados e equipamentos de qualidade premium</p>
              </div>
              <div className="value-item">
                <h4>Inclusão</h4>
                <p>Espaço acolhedor para todas as idades e níveis de experiência</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="final-cta-section">
        <div className="container">
          <h2>Pronto para Começar?</h2>
          <p className="cta-text">
            Descubra a magia de viajar a cavalo e a transformação que a natureza pode trazer
          </p>
          <a href="https://buk.pt/casa-da-quinta-1717" target="_blank" rel="noopener noreferrer" className="button-style primary">
            Marcar Agora
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
