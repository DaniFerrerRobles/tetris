import React, { useState } from 'react';

const TablaPartidas = () => {
  const [partidas, setPartidas] = useState([
    { id: 1, nombre: 'Partida 1', puntaje: 100 },
    { id: 2, nombre: 'Partida 2', puntaje: 200 },
    { id: 3, nombre: 'Partida 3', puntaje: 150 },
  ]);

  const [ordenAscendente, setOrdenAscendente] = useState(true);

  const ordenarPorColumna = (columna) => {
    const partidasOrdenadas = [...partidas].sort((a, b) =>
      ordenAscendente ? a[columna] - b[columna] : b[columna] - a[columna]
    )
    setPartidas(partidasOrdenadas);
    setOrdenAscendente(!ordenAscendente)
  }

  const agregarPartida = (nuevaPartida) => {
    setPartidas([...partidas, nuevaPartida])
  }

  return (
    <div>
      <button onClick={() => 
          agregarPartida({
            id: partidas.length + 1,
            nombre: `Partida ${partidas.length + 1}`,
            puntaje: Math.floor(Math.random() * 200),
          })
        }
      >
        Agregar Partida
      </button>

      <button onClick={() => ordenarPorColumna('puntaje')}>
        Ordenar por Puntaje ({ordenAscendente ? 'Ascendente' : 'Descendente'})
      </button>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Puntaje</th>
          </tr>
        </thead>
        <tbody>
          {partidas.map((partida) => (
            <tr key={partida.id}>
              <td>{partida.nombre}</td>
              <td>{partida.puntaje}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TablaPartidas;