import React from "react";
import Card from "./Card";
import estilos from "../estilos/Cards.module.css";

export default function Cards(props) {
  if (props.cities.length === 0)
    return (
      <div className={estilos.sinCiudades}>
        ingrese ciudades para comenzar...
      </div>
    );
  return (
    <div className={estilos.cards}>
      {props.cities.map((ciudad) => (
        <Card
          key={ciudad.id}
          id={ciudad.id}
          max={ciudad.max}
          min={ciudad.min}
          temp={ciudad.temp}
          name={ciudad.name}
          img={ciudad.img}
          onClose={props.onClose}
        />
      ))}
    </div>
  );
}
