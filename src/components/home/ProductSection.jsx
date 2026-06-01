import { BriefcaseBusiness } from 'lucide-react'
import ProductCard from './ProductCard'
import './ProductSection.css'

const ProductSection = ({ title, products }) => {
  return (
    <section className="product-section">
      <div className="product-section__header">
        <div>
          <BriefcaseBusiness size={30} />
          <h2>{title}</h2>
        </div>

        <button>Ver todos</button>
      </div>

      <div className="product-section__grid">
        {products.map((product) => (
          <ProductCard product={product} key={product.name} />
        ))}
      </div>
    </section>
  )
}

export default ProductSection