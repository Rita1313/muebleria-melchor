// src/pages/Electrodomesticos.jsx

import Header from "../components/layout/Header";
import CategoryHero from "../components/products/CategoryHero";
import ProductGrid from "../components/products/ProductGrid";
import { electrodomesticos } from "../data/electrodomesticos";
import "../components/products/products.css";
function Electrodomesticos() {
  return (
    <>
      <Header />

      <main>
        <CategoryHero
          title="Electrodomésticos"
          text="Encuentra productos para renovar tu hogar"
        />

<ProductGrid
  title="Productos de Electrodomésticos"
  products={electrodomesticos}
/>      </main>
    </>
  );
}

export default Electrodomesticos;