import React from 'react';

export function Instrucciones() {
  return (
    <>
      <header className="d-flex align-items-center justify-content-center">
        <img src="\prototipo\img\logo.png" alt="logo" width="200" className="mt-5" />
      </header>

      <main className="container mt-5 bg-opacity-50 bg-dark p-2">
        <div id="intro" className="text-center p-5 text-light">
          <p>
            Tetris és un videojoc de tipus trencaclosques. Fou inventat per l'enginyer informàtic rus Aleksei Pàjitnov l'any 1984, mentre treballava a l'Acadèmia de Ciències de Moscou.
          </p>
          <h2>Instruccions:</h2>
          <p>Pots moure les peces fent servir les fletxes d'esquerra i dreta.</p>
          <p>Amb la fletxa <strong>amunt</strong> pots girar la peça.</p>
          <p>
            Prem la tecla <strong>Ñ</strong> per canviar la peça actual per la peça que està a punt de sortir (que pots veure a la columna de la dreta).
          </p>
          <p>
            Al final de la partida podràs desar la teva puntuació i veure el <strong>rànquing</strong> de jugadors.
          </p>
          <button className="btn btn-success fs-1 mt-5" ><a href="/Juego">JUGAR</a></button>
          <hr />
        </div>
      </main>
    </>
  );
}

export default Instrucciones;