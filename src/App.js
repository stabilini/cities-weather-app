import React, { useState } from "react";
import Nav from "./components/Nav";
import Cards from "./components/Cards";
import FondoAnimado from "./components/FondoAnimado";
import "./App.css";
// import apiKey from "./tokens";
import cities from "./assets/data.js";

function App() {
  var [ciudades, setCiudades] = useState([]);

  // La siguiente linea es solo para hacer las pruebas y no llamar a la API, despues comentarla y dejar activa la funcion de abajo
  // ciudades = [...cities];
  let apiKey = '3d2faacaeadc49552dd87412f55dbef1';

  function onSearch(ciudad) {
    console.log(null);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCiudades((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onClose(id) {
    setCiudades((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards cities={ciudades} onClose={onClose} />
      <FondoAnimado />
      <div className="footer">2022 - Nicolás Stabilini - PT-08</div>
    </div>
  );
}

export default App;
