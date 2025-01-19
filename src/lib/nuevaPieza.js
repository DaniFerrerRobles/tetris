import { modelos } from './modelos'
import modeloPieza from './modeloPieza'

export function nuevaPieza() {
    const arrayPiezasNumeroAleatorio = Math.floor(Math.random() * modelos.piezas.length)
    const piezaAleatoria = modelos.piezas[arrayPiezasNumeroAleatorio]

    numeroPiezaAleatoria = piezaAleatoria
    nombreDeLaPiezaAleatoria = modelos.piezas[piezaAleatoria].nombre
    anguloDeLaPieza = modelos.piezas[piezaAleatoria].matriz[0]
    fila
    columna
    matriz = modelos.piezas[piezaAleatoria].matriz

    const piezaEscogida = new modeloPieza(numeroPiezaAleatoria,nombreDeLaPiezaAleatoria, anguloDeLaPieza, 2 , 4, matriz)
    
    piezaEscogida.girar()

    return(piezaEscogida)
}