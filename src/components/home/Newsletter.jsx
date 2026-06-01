import 'react';
import { MessageCircle } from 'lucide-react';
import { FaFacebookF } from "react-icons/fa";import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className="social-section-container">
      {/* Parte Superior: Banner de Imagen Estática */}
      <div className="social-banner-image-wrapper">

      </div>

      {/* Parte Inferior: Sección Programable Interactiva */}
      <div className="social-channels-content">
        <div className="social-channels-header">
          <div className="header-left">
            <h3>Conéctate con nosotros</h3>
            <p>Elige tu canal favorito y entérate de todo al instante.</p>
          </div>
          <a href="#canales" className="view-all-link">
          </a>
        </div>

        <div className="social-cards-grid">
          {/* Tarjeta WhatsApp - Canal Principal */}
<div className="social-card whatsapp-card">
  <div className="card-info-wrapper">
    <div className="icon-container whatsapp-icon-bg">
      <MessageCircle
        size={32}
        className="icon-whatsapp"
        fill="currentColor"
      />
    </div>

    <div className="card-text">
      <h4>
        WhatsApp <span className="badge-principal">Principal</span>
      </h4>

      <p>
        Únete a nuestro grupo oficial y recibe ofertas exclusivas.
      </p>
    </div>
  </div>

  <a
    href="https://wa.me/5217711234567"
    target="_blank"
    rel="noopener noreferrer"
    className="social-button whatsapp-btn"
  >
    <MessageCircle size={18} />
    Ir a WhatsApp
  </a>
</div>

          {/* Tarjeta Facebook - Canal Secundario */}
          <div className="social-card facebook-card">
            <div className="card-info-wrapper">
              <div className="icon-container facebook-icon-bg">
                <FaFacebookF size={32} className="icon-facebook" />
              </div>
              <div className="card-text">
                <h4>Facebook</h4>
                <p>Síguenos en nuestra página oficial para ver promociones y novedades.</p>
              </div>
            </div>
            <a 
              href="https://facebook.com/tu_pagina" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-button facebook-btn"
            >
              <FaFacebookF size={18} fill="currentColor" /> Ir a Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;