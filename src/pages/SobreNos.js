import React from 'react';
import './SobreNos.css';

function SobreNos() {
  const horses = [
    { 
      name: 'Esperança', 
      image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400&q=80',
      description: 'Companheira leal para equitação terapêutica, com uma energia reconfortante' 
    },
    { 
      name: 'Luna', 
      image: 'https://images.unsplash.com/photo-1585399817583-e46dc15d1ab0?w=400&q=80',
      description: 'Dócil e carinhosa, perfeita para as aulas de crianças e terapia equestre' 
    },
    { 
      name: 'Trovão', 
      image: 'https://images.unsplash.com/photo-1595761720005-c73f0e86a68f?w=400&q=80',
      description: 'Majestoso e bravo, ideal para aulas de equitação avançada' 
    },
  ];

  const services = [
    { icon: '🐴', title: 'Aulas de Equitação', description: 'Desde principiante até avançado, aulas personalizadas para todas as idades' },
    { icon: '💚', title: 'Equitação Terapêutica', description: 'Sessões terapêuticas que promovem bem-estar físico e emocional' },
    { icon: '👶', title: 'Equitação Adaptada', description: 'Programas especializados para crianças com necessidades especiais' },
    { icon: '🎂', title: 'Festas de Aniversário', description: 'Celebrações memoráveis com atividades equestres e natureza' },
    { icon: '🌳', title: 'Experiências na Natureza', description: 'Passeios a cavalo e contacto com a natureza' },
    { icon: '💫', title: 'Créches Equestres', description: 'Programas de verão e férias escolares para crianças' },
  ];

  return (
    <div className="sobre-container">
      <section className="hero-section-about">
        <div className="hero-visual">
          <img 
            src="https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1600&q=90" 
            alt="Casa da Quintã 1717"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content-about">
          <div className="hero-text-wrapper">
            <h1>Conheça a Casa da Quintã 1717</h1>
            <p>Tradição Equestre, Inovação Terapêutica e Compromisso com o Bem-estar</p>
          </div>
        </div>
      </section>

      <section className="missao-section">
        <div className="container">
          <div className="missao-grid">
            <div className="missao-image">
              <img 
                src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600&q=90" 
                alt="Casa da Quintã"
              />
            </div>
            <div className="missao-text">
              <h2>Nossa História</h2>
              <p className="intro-text">
                A Casa da Quintã 1717 é um centro equestre premium que combina tradição com inovação terapêutica, criando um espaço transformador.
              </p>
              <p>
                Desde 1717, este espaço tem sido dedicado à excelência equestre e ao bem-estar. Hoje, continua essa tradição 
                através de programas modernos que combinam educação equestre, terapia e crescimento pessoal.
              </p>
              <p>
                Nossa missão é proporcionar experiências autênticas e transformadoras através da equitação e conexão com a natureza, 
                desenvolvendo confiança, responsabilidade e bem-estar integral em todas as idades.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="servicos-section alt-section">
        <div className="container">
          <h2 className="section-title">Programas e Atividades</h2>
          <div className="servicos-grid">
            {services.map((service, index) => (
              <div key={index} className="servico-card">
                <div className="servico-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="https://buk.pt/casa-da-quinta-1717" target="_blank" rel="noopener noreferrer" className="button-style secondary">
                  Marcar
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cavalos-section">
        <div className="container">
          <h2 className="section-title">Os Nossos Cavalos</h2>
          <p className="section-intro">
            Cada cavalo é cuidadosamente selecionado pelo seu temperamento e capacidade de conectar com os participantes. 
            São verdadeiros profissionais que transformam vidas.
          </p>
          <div className="cavalos-grid">
            {horses.map((horse, index) => (
              <div key={index} className="cavalo-card">
                <div className="cavalo-image" style={{ backgroundImage: `url(${horse.image})` }} />
                <div className="cavalo-info">
                  <h3>{horse.name}</h3>
                  <p>{horse.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="container">
          <h2>Conhecer Nossos Programas</h2>
          <p className="cta-text">
            Descubra como podemos transformar sua vida através da equitação e bem-estar
          </p>
          <a href="https://buk.pt/casa-da-quinta-1717" target="_blank" rel="noopener noreferrer" className="button-style primary">
            Agendar Visita
          </a>
        </div>
      </section>
    </div>
  );
}

export default SobreNos;
