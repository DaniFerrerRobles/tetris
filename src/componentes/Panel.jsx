import React from "react";

export const Panel = ({ arrayCasillas }) => {
  return (
    <div>
      {arrayCasillas.map((fila, idFila) => (
        <div key={idFila} className="d-flex">
          {fila.map((casilla) => {
            if (casilla === 1) {
              casilla = "bg-secondary"
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Panel;