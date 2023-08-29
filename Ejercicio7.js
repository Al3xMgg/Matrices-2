// Convertir a matriz

function convertirMatriz(columnas, array){
    const matriz = []

    for (let i = 0; i < array.length; i++){
        const fila = array.slice(i, i + columnas)
        matriz.push(fila)
    }
    return matriz
}

console.log(convertirMatriz(2, [1, 2, 3, 4]))