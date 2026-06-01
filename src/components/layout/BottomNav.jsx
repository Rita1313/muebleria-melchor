import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaBlender,
  FaCouch,
  FaChair,
  FaWhatsapp
} from "react-icons/fa";

import "./BottomNav.css";

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/">
        <FaHome />
        <span>Inicio</span>
      </NavLink>

<NavLink to="/electrodomesticos">
  <FaBlender />
  <span>Electrodometicos</span>
</NavLink>

<NavLink to="/muebles">
  <FaCouch />
  <span>Muebles</span>
</NavLink>
<NavLink to="/oficina">
  <FaChair />
  <span>Oficina</span>
</NavLink>

      <a
        href="https://wa.me/5210000000000"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp />
        <span>WhatsApp</span>
      </a>
    </nav>
  );
}