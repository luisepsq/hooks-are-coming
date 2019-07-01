import React, { useState, useEffect } from "react";

function useCoordenadas() {
  const [coordenadas, setCoordenadas] = useState({
    latitud: null,
    longitud: null,
    label: null
  });

  useEffect(() => {
    window.navigator.geolocation.watchPosition(position => {
      setCoordenadas({
        latitud: position.coords.latitude,
        longitud: position.coords.longitude
      });
    });
    return () => {
      window.navigator.geolocation.clearWatch();
    };
  });

  return coordenadas;
}

export default function Where() {
  const coordenadas = useCoordenadas();
  return (
    <div>
      <h1>Your current Position</h1>
      <h3>Latitud: {coordenadas.latitud}</h3>
      <h3>Longitud: {coordenadas.longitud}</h3>
    </div>
  );
}
