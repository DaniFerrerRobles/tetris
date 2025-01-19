import React, { useState } from "react";
import { modelos } from "./lib/modelos";
import Panel from "./componentes/Panel";

const Juego = () => {
  const [arrayCasillas, setArrayCasillas] = useState(modelos.matriz);

  return (
    <div className="juego">
      <h1>Juego de Tetris</h1>
      <Panel arrayCasillas={arrayCasillas} />
    </div>
  );
};

export default Juego;