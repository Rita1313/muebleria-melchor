import { MessageCircle } from 'lucide-react'
import './ProductCard.css'

const ProductCard = ({ product }) => {
  return (
    <article className="product-card">
      {product.discount && (
        <span className="product-card__badge product-card__badge--pink">
          {product.discount}
        </span>
      )}

      {product.tag && (
        <span className="product-card__badge product-card__badge--orange">
          {product.tag}
        </span>
      )}

      <div className={`product-card__image product-card__image--${product.type}`}>
        <span></span>
      </div>

      <h3>{product.name}</h3>

      <div className="product-card__prices">
        <strong>{product.price}</strong>
        {product.oldPrice && <del>{product.oldPrice}</del>}
      </div>

      <button className="product-card__whatsapp">
        <MessageCircle size={17} />
        Consultar por WhatsApp
      </button>
    </article>
  )
}

export default ProductCard