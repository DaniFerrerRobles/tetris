import React, { useState } from "react";
import { modelos } from "./lib/modelos";
import Panel from "./componentes/Panel";
import Pieza from "./componentes/Pieza";
import { nuevaPieza } from "./lib/nuevaPieza";

const Juego = () => {
  const [arrayCasillas, setArrayCasillas] = useState(modelos.matriz);
  const [pieza, setPieza] = useState(modelos.piezas[0].matriz)

  return (
    <div>
      <Panel arrayCasillas = {arrayCasillas} />
      <Pieza pieza = {pieza} />
      <Pieza pieza = {nuevaPieza(2,4)} />
      <Pieza pieza = {nuevaPieza(0,4)} />
      <Pieza pieza = {nuevaPieza(4,4)} />
    </div>
  );
};
export default Juego;