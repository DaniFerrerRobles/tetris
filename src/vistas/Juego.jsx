import React, { useState } from "react";
import { modelos } from "./lib/modelos";
import Panel from "./componentes/Panel";
import Pieza from "./componentes/Pieza";

const Juego = () => {
  const [arrayCasillas, setArrayCasillas] = useState(modelos.matriz);
  const [pieza, setPieza] = useState(modelos.piezas[0].matriz)

  return (
    <div>
      <Panel arrayCasillas={arrayCasillas} />
      <Pieza pieza={pieza} />
    </div>
  );
};
export default Juego;