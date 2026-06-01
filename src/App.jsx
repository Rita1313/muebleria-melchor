import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Electrodomesticos from "./pages/Electrodomesticos";
import Muebles from "./pages/Muebles";
import ProductDetail from "./pages/ProductDetail";
import BottomNav from "./components/layout/BottomNav";
import Oficina from "./pages/Oficina";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/electrodomesticos" element={<Electrodomesticos />} />
        <Route path="/muebles" element={<Muebles />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
         <Route path="/oficina" element={<Oficina />} />
      </Routes>
             <BottomNav />

    </BrowserRouter>
  );
}

export default App;