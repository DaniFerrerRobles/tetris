import { modelos } from './modelos'
import modeloPieza from './modeloPieza'

export function nuevaPieza(fila, columna) {
    const arrayPiezasNumeroAleatorio = Math.floor(Math.random() * modelos.piezas.length)
    const piezaAleatoria = modelos.piezas[arrayPiezasNumeroAleatorio]

    let numeroPiezaAleatoria = arrayPiezasNumeroAleatorio
    let nombreDeLaPiezaAleatoria = piezaAleatoria.nombre
    let anguloDeLaPieza = piezaAleatoria.matriz[0]
    let matriz = piezaAleatoria.matriz    

    const piezaEscogida = new modeloPieza(numeroPiezaAleatoria,nombreDeLaPiezaAleatoria, anguloDeLaPieza, fila, columna, matriz)
    
    piezaEscogida.girar()

    return(piezaEscogida)
}