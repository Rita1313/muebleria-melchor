import { useEffect, useState } from 'react'

import Header from '../components/layout/Header'
import HeroBanner from '../components/home/HeroBanner'
import ProductSection from '../components/home/ProductSection'
import Newsletter from '../components/home/Newsletter'

import { getProductos } from '../services/api'

import './Home.css'

const Home = () => {

  const [productos, setProductos] = useState([])

  useEffect(() => {

    const cargarProductos = async () => {

      try {

        const data = await getProductos()

        setProductos(data)

      } catch (error) {

        console.error(
          'No se pudo conectar con la API',
          error
        )

      }

    }

    cargarProductos()

  }, [])

  return (
    <div className="home-page">

      <Header />

      <main className="home-main">

        <HeroBanner />

        <ProductSection
          title="Productos"
          products={productos}
        />

        <Newsletter />

      </main>

    </div>
  )
}

export default Home