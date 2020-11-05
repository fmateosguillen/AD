//Ejercicio 6
let a = 1;
let b = 100;
function mostrar_rango(a, b){
    let arr = [];
    if(a<b){
        for(i = a; i<b; i++){
            arr.push(i);
        }
        arr.push(b);
    }else{
        for(i = b; i<a; i++){
            arr.push(i);
        }
        arr.push(a);
    }
    return arr;
}
console.log(mostrar_rango(a, b));