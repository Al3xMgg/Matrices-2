// Numero mayor
function obtenerNumeroMayor (matriz){
    let mayorNumero = matriz[0][0]

    for(let i = 0; i < matriz.lenght; i++){
        for(let j = 0; j < matriz.lenght; j++){
            if(matriz[i][j] > mayorNumero){
                mayorNumero = matriz[i][j];
            }
        }
    }
    return mayorNumero;
}

const matriz = [
    (2, 7, 12, 1),
    (8, 23),
    (9, 45, 7),
    (22, 3, 24, 4),
];

const resultado = obtenerNumeroMayor(matriz)
console.log(resultado);

//----------------------------------------------------------------------
