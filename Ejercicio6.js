function obtenerCantidad (item, items){

let acum = 0


    for(let i = 0; i < items.length; i++){
        for(let j = 0; j < items[i].length; j++){
            if(items[i][j] === item){
                acum = acum + 1
            }
        }     
    }
    return acum

}


console.log(obtenerCantidad(3, [[1, 2, 3], [4, 5, 3]]))