//Ejercicio 2
let array = [1, 2, 3, 4, 5];
let num = 3;

function devolver_posiciones(array, num){
    if(num === undefined){
        num = 0;
        console.log(array[num]);
    }else{
        for(var i = 0; i<num; i++){
            console.log(array[i]);
        }
    }
}

devolver_posiciones(array);