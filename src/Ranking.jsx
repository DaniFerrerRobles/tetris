import React from "react";

export function Ranking() {
  return (
    <div id="info">
      <div id="partidas" className="m-5 p-5 bg-dark">
        <h2 className="text-center text-light">Ranking</h2>
        <table className="table table-dark align-middle">
          <thead>
            <tr className="bg-dark">
              <th>#</th>
              <th>Avatar</th>
              <th>Jugador</th>
              <th>Puntaje</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="fs-2">1</td>
              <td>
                <img src="ruta/a/imagen/avatar1.png" alt="avatar 1" width="50" />
              </td>
              <td>ANDER</td>
              <td>1255</td>
            </tr>
            <tr>
              <td className="fs-2">2</td>
              <td>
                <img src="ruta/a/imagen/avatar2.png" alt="avatar 2" width="50" />
              </td>
              <td>MARIA</td>
              <td>1200</td>
            </tr>
            <tr>
              <td className="fs-2">3</td>
              <td>
                <img src="ruta/a/imagen/avatar3.png" alt="avatar 3" width="50" />
              </td>
              <td>JUAN</td>
              <td>1100</td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  );
};