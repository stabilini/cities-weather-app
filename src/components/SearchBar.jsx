import estilos from "../estilos/SearchBar.module.css";
import React, { useState } from "react";

function SearchBar(props) {
  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    props.onSearch(input);
    setInput("");
  };

  const usarEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      props.onSearch(input);
      setInput("");
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Ingrese ciudad..."
        className={estilos.input_search}
        onChange={manejarCambio}
        value={input}
        autofocus
        onKeyUp={usarEnter}
      />
      &nbsp;
      <button className={estilos.boton_search} onClick={manejarEnvio}>
        Buscar ciudad
      </button>
    </div>
  );
}

export default SearchBar;
