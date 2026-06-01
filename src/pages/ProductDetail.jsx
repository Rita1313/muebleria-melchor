import { useState } from 'react';
import { 
  FaChevronLeft, 
  FaChevronRight, 
  FaWhatsapp, 
  FaStore, 
  FaTruck, 
  FaShieldAlt, 
  FaTag, 
  FaBoxes, 
  FaLayerGroup,
} from 'react-icons/fa';
import './ProductDetail.css';
import Header from "../components/layout/Header";

const ProductDetail = () => {
  // Datos simulados del producto principal
  const product = {
    title: "Freidora de Aire Digital Premium 5.5L",
    description: "Prepara tus platillos favoritos de manera saludable con tecnología de circulación de aire rápido de 360°. Cuenta con panel táctil inteligente, 8 programas preestablecidos y canastilla antiadherente de fácil limpieza.",
    badge: "Disponible en local",
    images: [
      "https://static.vecteezy.com/system/resources/previews/037/387/245/non_2x/air-fryer-kitchen-machine-on-transparent-background-green-color-png.png",
      "https://static.vecteezy.com/system/resources/previews/049/669/321/non_2x/orange-microwave-with-transparent-background-black-sides-and-a-silver-control-panel-a-modern-kitchen-appliance-png.png",
      "https://static.vecteezy.com/system/resources/thumbnails/047/826/364/small_2x/portable-blender-against-transparent-background-free-png.png"
    ],
    specs: [
      { id: 1, label: "Precio", value: "$2,499.00", icon: <FaTag /> },
      { id: 2, label: "Unidad", value: "1 Pza", icon: <FaLayerGroup /> },
      { id: 3, label: "Categoría", value: "Cocina", icon: <FaBoxes /> },
      { id: 4, label: "Stock", value: "12 disp.", icon: <FaBoxes /> }
    ]
  };

  // Productos Recomendados (Sugerencias inferiores)
  const recommendedProducts = [
    {
      id: 101,
      name: "Licuadora Portátil Recargable",
      price: "$599.00",
      image: "https://static.vecteezy.com/system/resources/thumbnails/047/826/364/small_2x/portable-blender-against-transparent-background-free-png.png"
    },
    {
      id: 102,
      name: "Horno de Microondas Retro",
      price: "$3,199.00",
      image: "https://static.vecteezy.com/system/resources/previews/049/669/321/non_2x/orange-microwave-with-transparent-background-black-sides-and-a-silver-control-panel-a-modern-kitchen-appliance-png.png"
    },
    {
      id: 103,
      name: "Cafetera Expresso Automática",
      price: "$4,299.00",
      image: "https://static.vecteezy.com/system/resources/previews/037/387/245/non_2x/air-fryer-kitchen-machine-on-transparent-background-green-color-png.png"
    },
    {
      id: 104,
      name: "Batidora de Pedestal Eléctrica",
      price: "$1,850.00",
      image: "https://static.vecteezy.com/system/resources/thumbnails/047/826/364/small_2x/portable-blender-against-transparent-background-free-png.png"
    }
  ];

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const nextImage = () => {
    setCurrentImgIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImgIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleWhatsAppClick = () => {
    const message = `¡Hola! Me interesa obtener más información sobre el producto: ${product.title}.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/521234567890?text=${encodedMessage}`, '_blank');
  };
return (
  <>
    <Header />

    <div className="pd-wrapper">
   

      <main className="pd-main-container">
        <section className="pd-gallery-column">
          <div className="pd-thumbnails-list">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                className={`pd-thumb-btn ${idx === currentImgIndex ? "active" : ""}`}
                onClick={() => setCurrentImgIndex(idx)}
              >
                <img src={img} alt={`Miniatura ${idx + 1}`} />
              </button>
            ))}
          </div>

          <div className="pd-main-viewer">
            <button className="pd-arrow-btn pd-arrow-left" onClick={prevImage}>
              <FaChevronLeft />
            </button>

            <div className="pd-image-stage">
              <img src={product.images[currentImgIndex]} alt={product.title} />
            </div>

            <button className="pd-arrow-btn pd-arrow-right" onClick={nextImage}>
              <FaChevronRight />
            </button>
          </div>
        </section>

        <section className="pd-info-column">
          <div className="pd-badge-store">
            <FaStore className="pd-badge-icon" />
            {product.badge}
          </div>

          <h1 className="pd-product-title">{product.title}</h1>
          <p className="pd-product-description">{product.description}</p>

          <div className="pd-specs-grid">
            {product.specs.map((spec) => (
              <div key={spec.id} className="pd-spec-card">
                <span className="pd-spec-icon">{spec.icon}</span>
                <span className="pd-spec-label">{spec.label}</span>
                <span className="pd-spec-value">{spec.value}</span>
              </div>
            ))}
          </div>

          <div className="pd-delivery-notice">
            <FaTruck className="pd-delivery-icon" />
            <div className="pd-delivery-text">
              <h4>Entrega inmediata en sucursal</h4>
              <p>Ven por él hoy mismo o recíbelo a domicilio coordinando con un asesor.</p>
            </div>
          </div>

          <button className="pd-whatsapp-cta" onClick={handleWhatsAppClick}>
            <FaWhatsapp className="pd-cta-icon" />
            Comprar por WhatsApp
          </button>

          <p className="pd-secure-text">
            <FaShieldAlt /> Compra 100% segura y garantizada por nuestro equipo.
          </p>
        </section>
      </main>

      <footer className="pd-suggestions-section">
        <h2 className="pd-suggestions-heading">Productos que te pueden interesar</h2>

        <div className="pd-slider-outer">
          <div className="pd-slider-inner">
            {recommendedProducts.map((item) => (
              <div key={item.id} className="pd-rec-card">
                <div className="pd-rec-image-wrapper">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="pd-rec-info">
                  <h3 className="pd-rec-name">{item.name}</h3>

                  <div className="pd-rec-footer">
                    <span className="pd-rec-price">{item.price}</span>

                    <button className="pd-rec-wa-btn" onClick={handleWhatsAppClick}>
                      <FaWhatsapp />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  </>
);
};

export default ProductDetail;