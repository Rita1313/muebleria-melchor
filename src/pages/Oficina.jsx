import Header from "../components/layout/Header";

import {
  FaWhatsapp,

  FaChair,
  FaShieldAlt,
} from "react-icons/fa";

import "./Oficina.css";
import ProductGrid from "../components/products/ProductGrid";
import "../components/products/products.css";
const productos = [
  {
    id: 101,
    name: "Silla ejecutiva ergonómica",
    price: "$1,299",
    oldPrice: "$1,799",
    image: "https://i.pinimg.com/1200x/80/24/7a/80247a0cbfb454487d682cb6c5789604.jpg",
    tag: "Oferta",
  },
  {
    id: 102,
    name: "Escritorio moderno de oficina",
    price: "$2,499",
    oldPrice: "$3,199",
    image: "https://i.pinimg.com/736x/1d/88/58/1d885885c9929c1c0ddded342556cd7a.jpg",
    tag: "Nuevo",
  },
  {
    id: 103,
    name: "Microondas digital",
    price: "$2,199",
    oldPrice: "$2,699",
    image: "https://i.pinimg.com/736x/30/bb/f1/30bbf19682b2a268fdd05f0cab6b45fc.jpg",
    tag: "Popular",
  },
];

export default function Oficina() {
  return (
    <>
      <Header />
      <main className="oficina-page">
        
        {/* NUEVO BANNER HERO BASADO EN LA REFERENCIA */}
 <section className="oficina-hero-new">
  <div className="hero-bg-circle circle-one"></div>
  <div className="hero-bg-circle circle-two"></div>

  <div className="hero-content-new">
    <span className="hero-label-new"> OFICINA</span>

    <h1>
      Crea tu espacio <br />
      de trabajo ideal
    </h1>

    <p>
      Escritorios, sillas y muebles modernos para oficinas cómodas,
      elegantes y productivas.
    </p>

    <div className="hero-actions-new">
  <a
    className="whatsapp-cta"
    href="https://wa.me/5210000000000"
    target="_blank"
    rel="noreferrer"
  >
    <FaWhatsapp />
    Cotizar por WhatsApp
  </a>
</div>
  </div>

  <div className="hero-visual-new">
    <div className="image-card-main">
      <img
        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
        alt="Oficina moderna"
      />
    </div>

    <div className="floating-card top">
      <FaChair />
      <span>Sillas ergonómicas</span>
    </div>

    <div className="floating-card bottom">
      <FaShieldAlt />
      <span>Alta resistencia</span>
    </div>
  </div>
</section>

        {/* SECCIÓN DE PRODUCTOS */}
<ProductGrid
  title="Productos de Oficina"
  products={productos}
/>
      </main>
    </>
  );
}