import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav role="navigation" className="navbar">
      <div className="nav-links">
        <NavLink to="/inici" aria-label="Pàgina d'inici">INICI</NavLink>
        <NavLink to="/imatges" aria-label="Galeria d'imatges">GALERIA</NavLink>
        <NavLink to="/contacte" aria-label="Pàgina de contacte">CONTACTE</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;