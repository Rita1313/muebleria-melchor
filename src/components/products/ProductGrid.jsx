// src/components/products/ProductGrid.jsx

import ProductCard from "./ProductCard";
import "./products.css";
import { MousePointerClick } from "lucide-react";

function ProductGrid({ products, title }) {
  return (
    <section className="product-section">
      <div className="product-section__top">
        <h2>{title}</h2>
        <p>{products.length} productos disponibles</p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      <div className="product-section__hint">
        <div className="product-section__hint-icon">
          <MousePointerClick size={20} />
        </div>

        <span>Haz clic en el producto para ver detalles</span>
      </div>
    </section>
  );
}

export default ProductGrid;