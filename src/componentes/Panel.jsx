import React from "react";

export const Panel = ({ arrayCasillas }) => {
  return (
    <div className="panel">
      {arrayCasillas.map((fila, indexFila) => (
        <div key={indexFila} className="fila">
          {fila.map((casilla, indexCasilla) => (
            <div
              key={indexCasilla}
              className={`casilla ${casilla === 1 ? "bloque" : ""}`}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Panel;