import React from "react";
import { colorPieza } from "../lib/colores";

export const Panel = ({ arrayCasillas }) => {
  return (
    <div>
      {arrayCasillas.map((fila, idFila) => (
        <div key={idFila} className="d-flex">
          {fila.map((casilla, idCasilla) => (
            <div key={idCasilla} className={colorPieza(casilla)} style={{width: "40px", height: "40px", border: "1px solid", justifyContent: "center"}}>{casilla}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Panel;