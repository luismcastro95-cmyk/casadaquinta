// src/pages/Galeria.js
import React, { useState } from 'react';
import './Galeria.css';

/**
 * Componente Galeria - Premium Design
 * Galeria visual das experiências e cavalos da Casa da Quintã 1717
 */
function Galeria() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { 
      src: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600&q=80',
      caption: 'Esperança',
      description: 'Um dos nossos cavalos terapeutas, companheiro leal nas aulas de equitação'
    },
    { 
      src: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&q=80',
      caption: 'Aula de Equitação',
      description: 'Crianças aprendendo com segurança e alegria na Casa da Quintã'
    },
    { 
      src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=80',
      caption: 'Na Natureza',
      description: 'Passeio a cavalo rodeado de paisagens verdes e acolhedoras'
    },
    { 
      src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80',
      caption: 'Luna',
      description: 'Cavala dócil e carinhosa, perfeita para as aulas e terapia equestre'
    },
    { 
      src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80',
      caption: 'Festa de Aniversário',
      description: 'Celebrações memoráveis com cavalos e natureza para crianças felizes'
    },
    { 
      src: 'https://images.unsplash.com/photo-1519671482677-504be0ffec60?w=600&q=80',
      caption: 'Encontro Genuíno',
      description: 'Momentos especiais de ligação entre crianças e cavalos'
    },
    { 
      src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80',
      caption: 'Trovão',
      description: 'Cavalo majestoso, ideal para aulas de equitação avançada'
    },
    { 
      src: 'https://images.unsplash.com/photo-1519104645147-05f90f34ec30?w=600&q=80',
      caption: 'Bem-estar',
      description: 'Experiências de paz, aprendizagem e crescimento na Casa da Quintã'
    },
  ];

  return (
    <div className="galeria-container">
      {/* HERO SECTION */}
      <section className="hero-section-galeria">
        <div className="hero-visual">
          <img 
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&q=90" 
            alt="Galeria Casa da Quintã 1717"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content-galeria">
          <div className="hero-text-wrapper">
            <h1>Galeria de Experiências</h1>
            <p>Momentos e vivências que refletem nossa paixão pela equitação e bem-estar</p>
          </div>
        </div>
      </section>

      {/* GALERIA GRID */}
      <section className="galeria-section">
        <div className="container">
          <h2 className="section-title">Nossos Momentos</h2>
          <div className="gallery-grid">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="gallery-item"
                onClick={() => setSelectedImage(image)}
              >
                <div 
                  className="gallery-image"
                  style={{ backgroundImage: `url(${image.src})` }}
                >
                  <div className="image-overlay">
                    <span className="view-icon">👁</span>
                  </div>
                </div>
                <div className="image-caption">
                  <h3>{image.caption}</h3>
                  <p>{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>×</button>
            <img src={selectedImage.src} alt={selectedImage.caption} className="modal-image" />
            <div className="modal-info">
              <h3>{selectedImage.caption}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA FINAL */}
      <section className="final-cta-section">
        <div className="container">
          <h2>Crie Suas Próprias Memórias</h2>
          <p className="cta-text">
            Junte-se a centenas de pessoas que já vivenciaram experiências inesquecíveis na Casa da Quintã 1717
          </p>
          <a href="https://buk.pt/casa-da-quinta-1717" target="_blank" rel="noopener noreferrer" className="button-style primary">
            Marcar Agora
          </a>
        </div>
      </section>
    </div>
  );
}

export default Galeria;
