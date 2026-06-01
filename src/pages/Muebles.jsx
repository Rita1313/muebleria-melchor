import Header from "../components/layout/Header";
import BottomNav from "../components/layout/BottomNav";
import ProductGrid from "../components/products/ProductGrid";

import {
  FaTruck,
  FaShieldAlt,
  FaAward,
} from "react-icons/fa";

import "../components/products/products.css";
import "./Muebles.css";

function Muebles() {
  const muebles = [
    {
      id: 201,
      name: "Sofá Oslo 3 plazas",
      price: "$8,999",
      oldPrice: "$11,499",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900",
      tag: "Oferta",
    },
    {
      id: 202,
      name: "Comedor Avignon 6 sillas",
      price: "$12,749",
      oldPrice: "$14,999",
      image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?w=900",
      tag: "Nuevo",
    },
    {
      id: 203,
      name: "Cama Queen Lisboa",
      price: "$6,499",
      oldPrice: "$8,299",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900",
      tag: "Popular",
    },
  ];

  return (
    <>
      <Header />

      <main className="muebles-page">
        <section className="muebles-banner">
          <div className="muebles-banner__content">
            <h1>
              Dale vida a <br />
              <b>tu espacio</b>
            </h1>

            <p>
              Muebles modernos, cómodos y funcionales para cada rincón de tu hogar.
            </p>
          </div>

          <div className="muebles-banner__info">
            <div>
              <FaTruck />
              <p><b>Sin envíos</b>Compra local</p>
            </div>

            <div>
              <FaShieldAlt />
              <p><b>Productos</b>de calidad</p>
            </div>

            <div>
              <FaAward />
              <p><b>Visítanos en tienda</b>Atención presencial</p>
            </div>
          </div>
        </section>

        <ProductGrid
          title="Productos de Muebles"
          products={muebles}
        />
      </main>

      <BottomNav />
    </>
  );
}

export default Muebles;