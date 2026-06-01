// src/components/products/ProductCard.jsx

import {
  FaWhatsapp,
  FaFire,
  FaTag
} from "react-icons/fa";

import { Sparkles } from "lucide-react";

import { useNavigate } from "react-router-dom";

import "./ProductCard.css";

function ProductCard({ product }) {

  const navigate = useNavigate();

  // Ir a detalles
  const handleDetalles = (e) => {

    // Evita abrir detalles si se dio clic al botón WhatsApp
    if (e.target.closest(".ml-card__whatsapp")) {
      return;
    }

    navigate(`/producto/${product.id}`);
  };

  // Comprar por WhatsApp
  const handleWhatsApp = (e) => {

    e.stopPropagation();

    const numero = "5210000000000";

    const mensaje = `Hola, me interesa este producto:
    
${product.name}
${product.price}`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
  };

  // Iconos dinámicos según tag
  const renderTagIcon = () => {

    if (product.tag === "Oferta") {
      return <FaTag className="ml-card__tag-icon" />;
    }

    if (product.tag === "Nuevo") {
      return (
        <Sparkles
          className="ml-card__tag-icon"
          size={14}
        />
      );
    }

    if (product.tag === "Popular") {
      return <FaFire className="ml-card__tag-icon" />;
    }

    return null;
  };

  // Clase dinámica
  const tagClass = product.tag
    ? `ml-card__tag--${product.tag.toLowerCase()}`
    : "";

  return (

    <article
      className="ml-card"
      onClick={handleDetalles}
      role="button"
      tabIndex={0}
    >

      <div className="ml-card__image-container">

        {/* Imagen */}
        <img
          className="ml-card__image"
          src={product.image}
          alt={product.name}
        />

        {/* Tag */}
        {product.tag && (
          <span className={`ml-card__tag ${tagClass}`}>
            {renderTagIcon()}
            {product.tag}
          </span>
        )}

        {/* Botón WhatsApp */}
        <button
          className="ml-card__whatsapp"
          onClick={handleWhatsApp}
          aria-label="Comprar por WhatsApp"
        >
          <FaWhatsapp />
        </button>

      </div>

      <div className="ml-card__content">

        <h3 className="ml-card__title">
          {product.name}
        </h3>

        <div className="ml-card__price-row">

          <div className="ml-card__price-group">

            <span className="ml-card__price-current">
              {product.price}
            </span>

            {product.oldPrice && (
              <span className="ml-card__price-old">
                {product.oldPrice}
              </span>
            )}

          </div>

          {product.off && (
            <div className="ml-card__discount-badge">
              {product.off}
            </div>
          )}

        </div>

      </div>

    </article>
  );
}

export default ProductCard;