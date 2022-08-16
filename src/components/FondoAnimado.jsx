import iconosEstados from "./IconosEstados";
import "../estilos/weather-icons.min.css";
import "../estilos/FondoAnimado.scss";
import React, { useState } from "react";

export default function FondoAnimado() {
  function obtenerIconosRandom(arr, num) {
    const mezclados = [...arr].sort(() => 0.5 - Math.random()); // mezcla todo el array
    return mezclados.slice(0, num); // devuelve hasta num
  }

  let [iconos, setIconos] = useState(obtenerIconosRandom(iconosEstados, 20));

  // Esto es un intento (a mejorar), para que los iconos que flotan en el fondo
  // vayan cambiando cada cierto tiempo y no se repitan siempre los mismos
  // si funciona se podria reducir la cantidad de SVGs que se muestran, lo cual mejoraria
  // el rendimiento en dispositivos medio lentos
  // setInterval(() => {
  //   const random1 = Math.floor(Math.random() * 30) + 1;
  //   const random2 = Math.floor(Math.random() * iconosEstados.length) + 1;
  //   const reemplazo = [...iconos];
  //   reemplazo[random1] = iconosEstados[random2];
  //   setIconos(reemplazo);
  //   //setIconos(obtenerIconosRandom(iconosEstados, 25));
  // }, 5000);

  return (
    <div className="wrap">
      {iconos.map((x, i) => {
        return (
          <svg
            className="svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-400 -800 4000 4000"
            preserveAspectRatio="none"
          >
            <path d={iconos[i]} strokeWidth="20" fill="none" />
          </svg>
        );
      })}
    </div>
  );
}
