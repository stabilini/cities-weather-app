import React from "react";
import SearchBar from "./SearchBar.jsx";
import estilos from "../estilos/Nav.module.css";
import logoHenry from "../assets/logohenry.png";

function Nav(props) {
  return (
    <div className={estilos.nav_contenedor}>
      <span className={estilos.titulo}>
        App del clima de{" "}
        <img className={estilos.henry} src={logoHenry} alt="logo" />
      </span>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}

export default Nav;
