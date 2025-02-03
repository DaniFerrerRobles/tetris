import React from "react";
import { colorPieza } from "../lib/colores";

export const Pieza = ({ pieza }) => {
  return (
    <div>
      {pieza.map((fila, idFila) => (
        <div key={idFila} className="d-flex">
          {fila.map((casilla, idCasilla) => {
            return (
              <div key={idCasilla} className={colorPieza(casilla)} style={{border: "1px solid black", width: "20px", height: "20px"}}>{casilla}</div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Pieza;