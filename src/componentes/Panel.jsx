import React from "react";
import { colorPieza } from "../lib/colorPieza";

export const Panel = (arrayCasillas) => {
  return (
    <div>
      {arrayCasillas.map((fila, idFila) => (
        <div key={idFila} className="d-flex">
          {fila.map((casilla) => (
            <div className={colorPieza(casilla)}></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Panel;