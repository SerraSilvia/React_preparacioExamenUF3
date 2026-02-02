import React from "react";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav role="navigation">
        <NavLink to="/Inici"  aria-label="Pàgina d'inici">INICI</NavLink>
        <NavLink to="/Imatges" aria-label="Galeria d'imatges">GALERIA D'IMATGES</NavLink>
        <NavLink to="/Contacte" aria-label="Pàgina de contacte">CONTACTA</NavLink>
      </nav>
    );
  }
}
export default Navbar;
