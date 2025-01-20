import React from "react";
import { colorPieza } from "../lib/colores";

export const Pieza = ({ pieza }) => {
  return (
    <div>
      {pieza.map((fila, idFila) => (
        <div key={idFila} className="d-flex">
          {fila.map((casilla, idCasilla) => (
            <div key={idCasilla} className={colorPieza(casilla)}></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Pieza;