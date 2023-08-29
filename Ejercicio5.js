// Obtener fila larga

function obtenerFilaLarga(matriz){
    let filaLarga = matriz[0]

    for (let i = 0; i < matriz.length; i++){
        if(matriz[i].length > filaLarga.length){
            filaLarga = matriz[i]
        }
    }
    return filaLarga
}

const matr1 = [[1, 4], [3, 4, 7], [5]]
const filaLarga1 = obtenerFilaLarga(matr1)
console.log(filaLarga1)

const matr2 = [[1, 4], [3, 4, 7, 9], [3, 4, 7, 8], [5]]
const filaLarga2 = obtenerFilaLarga(matr2)
console.log(filaLarga2)