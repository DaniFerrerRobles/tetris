import React, { useState } from "react";

const TablaPartidas = () => {
  const [partidas, setPartidas] = useState([
    { id: 1, nombre: "Partida 1", puntaje: 100, fecha: "13 Abril 2023" },
    { id: 2, nombre: "Partida 2", puntaje: 200, fecha: "14 Abril 2023" },
    { id: 3, nombre: "Partida 3", puntaje: 150, fecha: "15 Abril 2023" },
  ]);

  const [ordenAscendente, setOrdenAscendente] = useState(true);

  const ordenarPorColumna = (columna) => {
    const partidasOrdenadas = [...partidas].sort((a, b) =>
      ordenAscendente ? a[columna] - b[columna] : b[columna] - a[columna]
    );
    setPartidas(partidasOrdenadas);
    setOrdenAscendente(!ordenAscendente);
  };

  const agregarPartida = () => {
    setPartidas([...partidas,
      {
        id: partidas.length + 1,
        nombre: `Partida ${partidas.length + 1}`,
        puntaje: Math.floor(Math.random() * 200),
        fecha: new Date().toLocaleDateString("es-ES"),
      },
    ]);
  };

  return (
    <div>
      <button onClick={agregarPartida} className="btn btn-primary mb-3">Agregar Partida</button>

      <button onClick={() => ordenarPorColumna("puntaje")} className="btn btn-secondary mb-3 ms-2">Ordenar por Puntaje ({ordenAscendente ? "Ascendente" : "Descendente"})</button>

      <div id="partidas" className="m-5 p-5 bg-dark">
        <h2 className="text-center text-light">Partidas</h2>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Buscador"
            aria-label="Buscador"
            aria-describedby="button-addon2"
          />
          <button className="btn btn-outline-secondary" type="button" id="button-addon2">
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
        <table className="table table-dark">
          <thead>
            <tr>
              <td>ID</td>
              <td>Nombre</td>
              <td>Puntuación</td>
              <td>Fecha</td>
            </tr>
          </thead>
          <tbody>
            {partidas.map((partida) => (
              <tr key={partida.id}>
                <td>{partida.id}</td>
                <td>{partida.nombre}</td>
                <td>{partida.puntaje}</td>
                <td>{partida.fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablaPartidas;