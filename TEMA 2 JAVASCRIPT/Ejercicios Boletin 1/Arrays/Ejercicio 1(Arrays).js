//Ejercicio 1
let obj=[1, 2, 3];

function es_array(obj){
    return Array.isArray(obj);
}

if(es_array(obj)){
    console.log("Sí es un array");
}else{
    console.log("No es un array");
}