import React from "react";
import { colorPieza } from "../lib/colores";

export const Panel = ({ arrayCasillas }) => {
  return (
    <div>
      {arrayCasillas.map((fila, idFila) => (
        <div key={idFila} className="d-flex">
          {fila.map((casilla, idCasilla) => (
            <div key={idCasilla} className={colorPieza(casilla)} style={{border: "1px solid black"}}>{casilla}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Panel;