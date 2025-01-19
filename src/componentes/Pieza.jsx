import React from "react";

export const Pieza = ({pieza}) => {
  return (
    <div>
      {pieza.map((fila, idFila) => (
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

export default Pieza;