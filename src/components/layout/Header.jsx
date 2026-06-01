import { Link, useLocation } from "react-router-dom";
import {
  Search,
  MessageCircle,
  Hexagon,
  Home,
  WashingMachine, // Cambiado por estética a lavadora/electrodoméstico si quieres
  Armchair,
  
} from "lucide-react";

import "./Header.css";

const categorias = [
  { name: "Inicio", path: "/", icon: Home },
  { name: "Electrodomésticos", path: "/electrodomesticos", icon: WashingMachine },
  { name: "Muebles", path: "/muebles", icon: Armchair },
  { name: "Oficina", path: "/oficina", icon: Armchair }, // Cambia por tu icono preferido
];

const Header = () => {
  const location = useLocation();
  const actualPath = location.pathname;

  return (
    <header className="site-header">
      <div className="header__container">
        
        {/* LOGO / BRAND */}
        <div className="header__brand">
          <div className="header__logo-wrapper">
            <Hexagon className="header__logo-icon" size={24} fill="white" />
          </div>
          <h1 className="header__title">
            <span>Muebleria</span>
            <strong>Melchor</strong>
          </h1>
        </div>

        {/* BUSCADOR */}
        <form className="header__search">
          <input type="text" placeholder="Buscar productos, marcas y más..." />
          <button type="submit" className="header__search-btn">
            <Search size={18} color="white" />
          </button>
        </form>

        {/* NAVEGACIÓN */}
        <nav className="header__nav">
          {categorias.map((item) => {
            const Icon = item.icon;
            const isActive = actualPath === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`header__nav-link ${isActive ? "active-link" : ""}`}
              >
                <Icon size={20} className="nav-icon" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* WHATSAPP */}
        <a href="https://wa.me/tu-numero" target="_blank" rel="noreferrer" className="header__whatsapp">
          <div className="header__whatsapp-text">
            <strong>¡Consulta por WhatsApp!</strong>
            <span>Atención rápida</span>
          </div>
          <div className="header__whatsapp-icon">
            <MessageCircle size={24} color="white" fill="white" />
          </div>
        </a>

      </div>
    </header>
  );
};

export default Header;