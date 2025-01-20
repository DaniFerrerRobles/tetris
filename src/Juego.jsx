import React, { useState } from "react";
import { modelos } from "./lib/modelos";
import Panel from "./componentes/Panel";
import Pieza from "./componentes/Pieza";
import { nuevaPieza } from "./lib/nuevaPieza";

const Juego = () => {
  const [arrayCasillas, setArrayCasillas] = useState(modelos.matriz);
  const [pieza, setPieza] = useState(modelos.piezas[0].matriz)
  let columnaAleatoria = Math.floor(Math.random() * 12)

  const [piezaActual, setPiezaActual] = useState(nuevaPieza(0, columnaAleatoria))

  return (
    <div>
      <Panel arrayCasillas = {arrayCasillas} />
      <Pieza pieza = {pieza} />
      <Pieza pieza = {nuevaPieza(2,4)} />
      <Pieza pieza = {nuevaPieza(0,4)} />
      <Pieza pieza = {nuevaPieza(4,4)} />

      <button onClick={insertaNuevaPieza()}>Insertar Nueva Pieza</button>
    </div>
  )
}
export default Juego;