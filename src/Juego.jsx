import React, { useState } from "react"
import { modelos } from "./lib/modelos"
import Panel from "./componentes/Panel"
import Pieza from "./componentes/Pieza"
import { nuevaPieza } from "./lib/nuevaPieza"
import { colorPieza } from "./lib/colores"

const Juego = () => {
  const [arrayCasillas, setArrayCasillas] = useState(modelos.matriz);
  const [pieza, setPieza] = useState(modelos.piezas[0].matriz[0]);
  const columnaAleatoria = Math.floor(Math.random() * 10);

  const [piezaActual, setPiezaActual] = useState(nuevaPieza(0, columnaAleatoria))

  const pintarPieza = (pieza) => {
    piezaActual.matriz.map((fila, idFila) => {
      fila.map((casilla, idCasilla) => {
        arrayCasillas[piezaActual.fila + idFila][piezaActual.columna + idCasilla] = colorPieza(casilla);
      });
    });
  
    setArrayCasillas([...arrayCasillas])
  };  
  
  
  
  

   const insertaNuevaPieza = () => {
     const nuevaPiezaInsertar = nuevaPieza(0, columnaAleatoria);
     setPiezaActual(nuevaPiezaInsertar);
     pintarPieza(nuevaPiezaInsertar);
   }

   const moverDra = () => console.log("Mover a la derecha")

   const moverIzq = () => console.log("Mover a la izquierda")

   const bajar = () => console.log("Mover hacia abajo")

   const girar = () => console.log("girar pieza")


   const controlTeclas = (event) => {
    switch (event.key) {
      case "ArrowRight":
        moverDra();
        break;
      case "ArrowLeft":
        moverIzq();
        break;
      case "ArrowDown":
        bajar();
        break;
      case "ArrowUp":
        girar();
        break;
      default:
        break;
    }
  };

  return (
<div className="d-flex flex-column justify-content-between align-items-center">
      <Panel arrayCasillas = {arrayCasillas} />
      <Pieza pieza = {pieza} />
      <Pieza pieza={pieza} />
      <Pieza pieza={nuevaPieza(0, 0).matriz[1]} />
      <Pieza pieza={nuevaPieza(1, 2).matriz[3]} />

      <button onClick={insertaNuevaPieza}>Insertar Nueva Pieza</button>
    </div>
  )
}
export default Juego