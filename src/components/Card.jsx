import estilos from "../estilos/Card.module.css";
import "../estilos/weather-icons.min.css";
import React from "react";

export default function Card(props) {
  // temperatura actual de la API
  let temp = props.temp;
  // defino la temperatura minima y maxima para la escala de colores
  let min = 0;
  let max = 40;
  if (temp < min) temp = min; // me aseguro no irme por debajo de la minima
  if (temp > max) temp = max; // y de no irme por encima de la maxima
  // establezco el HUE entre 0 (rojo) y 240 (azul) normalizando la temperatura con min y max
  let hue = ((temp - min) / (max - min)) * 240;
  // es decir, temperatura minima es rojo y temperatura maxima es azul
  // creo el estilo del fondo, le resto 220 y 240 para generar el gradiente circular
  // ademas invierto la escala de colores porque 0 es rojo y 240 es azul
  // pero necesito que azul sea el minimo y rojo sea el maximo
  let fondo = {
    background: `radial-gradient(
                    circle,
                    hsl(${220 - hue}, 70%, 50%) 10%,
                    hsl(${240 - hue}, 50%, 50%) 50%,
                    hsl(${240 - hue}, 50%, 40%) 100%
                    )`,
  };

  // esto es para matchear el icono de openweathermap con los de https://erikflowers.github.io/weather-icons/
  // que son los que uso en las cards (no se usan todos lo de erikflowers)
  let icono = "";
  switch (props.img) {
    case "01d":
      icono = "wi wi-day-sunny";
      break;
    case "01n":
      icono = "wi wi-night-clear";
      break;
    case "02d":
      icono = "wi wi-day-cloudy";
      break;
    case "02n":
      icono = "wi wi-night-alt-cloudy";
      break;
    case "03d":
    case "93n":
      icono = "wi wi-cloud";
      break;
    case "04d":
    case "04n":
      icono = "wi wi-cloudy";
      break;
    case "09d":
    case "09n":
      icono = "wi wi-rain";
      break;
    case "10d":
      icono = "wi wi-day-rain";
      break;
    case "10n":
      icono = "wi wi-night-alt-rain";
      break;
    case "11d":
    case "11n":
      icono = "wi wi-thunderstorm";
      break;
    case "13d":
    case "13n":
      icono = "wi wi-snowflake-cold";
      break;
    case "50d":
    case "50n":
      icono = "wi wi-fog";
      break;
    default:
      icono = "wi wi-na";
  }
  icono += " " + estilos.icono_clima;

  return (
    <div className={estilos.card} style={fondo}>
      <div className={estilos.titulo_contenedor}>
        <h3 className={estilos.titulo}>{props.name}</h3>
        <button
          className={estilos.boton_cerrar}
          onClick={() => props.onClose(props.id)}
        >
          X
        </button>
      </div>
      <div className={estilos.contenedor_datos}>
        <div className={estilos.contenedor_temperatura}>
          <div>Min</div>
          <div>{props.min}°</div>
        </div>
        <div className={estilos.contenedor_temperatura_actual}>
          <div className={estilos.temperatura_actual}>
            {Math.floor(props.temp)}
          </div>
          <div>
            <div className={estilos.temperatura_grados}>°</div>
            <div className={estilos.temperatura_decimales}>
              .{props.temp.toFixed(1).split(".")[1]}
            </div>
          </div>
        </div>
        <div className={estilos.contenedor_temperatura}>
          <div>Max</div>
          <div>{props.max}°</div>
        </div>
      </div>
      <div className={estilos.contenedor_icono_clima}>
        <i className={icono}></i>
      </div>
    </div>
  );
}
