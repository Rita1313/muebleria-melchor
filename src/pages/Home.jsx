import Header from '../components/layout/Header'
import HeroBanner from '../components/home/HeroBanner'
import ProductSection from '../components/home/ProductSection'
import Newsletter from '../components/home/Newsletter'
import { featuredProducts, noveltyProducts } from '../data/products'

import './Home.css'

const Home = () => {
  return (
    <div className="home-page">
      <Header />

      <main className="home-main">
        <HeroBanner />

        <ProductSection
          title="Electrodomésticos destacados"
          products={featuredProducts}
        />

        <ProductSection
          title="Novedades para ti"
          products={noveltyProducts}
        />

        <Newsletter />
      </main>

    </div>
  )
}

export default Home