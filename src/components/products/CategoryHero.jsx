// src/components/products/CategoryHero.jsx

import 'react';
import "./HeroPremium.css";

// CONFIGURACIÓN DE RUTAS DE IMÁGENES
const IMAGENES_PRODUCTOS = {
  licuadora:
    'https://static.vecteezy.com/system/resources/thumbnails/047/826/364/small_2x/portable-blender-against-transparent-background-free-png.png',

  freidora:
    'https://static.vecteezy.com/system/resources/previews/037/387/245/non_2x/air-fryer-kitchen-machine-on-transparent-background-green-color-png.png',

  microondas:
    'https://static.vecteezy.com/system/resources/previews/049/669/321/non_2x/orange-microwave-with-transparent-background-black-sides-and-a-silver-control-panel-a-modern-kitchen-appliance-png.png',

  planta:
    'https://static.vecteezy.com/system/resources/previews/049/669/321/non_2x/orange-microwave-with-transparent-background-black-sides-and-a-silver-control-panel-a-modern-kitchen-appliance-png.png',
};

function CategoryHero() {
  return (
    <>
      {/* HERO */}
      <section className="hero-clon-container">

        {/* Fondos decorativos */}
        <div className="bg-sphere sphere-top-left"></div>
        <div className="bg-sphere sphere-center-pink"></div>
        <div className="bg-dots-pattern"></div>

        <div className="hero-main-layout">

          {/* IZQUIERDA */}
          <div className="layout-left">

            <div className="pill-badge">
              <span>Lo mejor para tu hogar ✨</span>
            </div>

            <h1 className="main-title-ecommerce">
              Renueva tu hogar <br />

              <span className="light-weight">
                con lo mejor en
              </span>

              <br />

              <span className="gradient-pink-text">
                electrodomésticos
              </span>
            </h1>

            <p className="sub-description-text">
              Productos modernos, prácticos y de calidad para tu día a día.
            </p>

            <div className="trust-badges-row">

              {/* BADGE 1 */}
              <div className="single-badge-box">

                <div className="badge-icon-pink">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>

                <div className="badge-label-texts">
                  <span className="lbl-top">Calidad</span>
                  <span className="lbl-bot">Garantizada</span>
                </div>

              </div>

              {/* BADGE 2 */}
              <div className="single-badge-box">

                <div className="badge-icon-pink">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                  </svg>
                </div>

                <div className="badge-label-texts">
                  <span className="lbl-top">Marcas</span>
                  <span className="lbl-bot">Originales</span>
                </div>

              </div>

              {/* BADGE 3 */}
              <div className="single-badge-box">

                <div className="badge-icon-pink">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M21 11.5a8.5 8.5 0 1 1-3-6.5" />
                  </svg>
                </div>

                <div className="badge-label-texts">
                  <span className="lbl-top">Atención</span>
                  <span className="lbl-bot">por WhatsApp</span>
                </div>

              </div>

            </div>
          </div>

          {/* DERECHA */}
          <div className="layout-right">

            <div className="floating-mini-card">

              <div className="heart-circle">
                ❤
              </div>

              <p>
                Tecnología que hace tu vida más fácil.
              </p>

            </div>

            <div className="products-images-wrapper">

              <img
                src={IMAGENES_PRODUCTOS.licuadora}
                alt="Licuadora"
                className="product-image blender-img"
              />

              <img
                src={IMAGENES_PRODUCTOS.freidora}
                alt="Freidora"
                className="product-image fryer-img"
              />

            </div>

            <div className="plant-decoration">

              <img
                src={IMAGENES_PRODUCTOS.planta}
                alt="Planta Decorativa"
              />

            </div>

            <div className="shadow-ellipse"></div>

          </div>
        </div>
      </section>
    </>
  );
}

export default CategoryHero;