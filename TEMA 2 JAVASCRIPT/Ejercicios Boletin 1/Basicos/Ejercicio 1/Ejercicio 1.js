//Escriba un programa JavaScript para calcular la suma de los dos números enteros dados. Si los dos
//valores son iguales, devuelve el triple de su suma. Usa una función para realizarlo.
var a = 3;
var b = 3;
function calcularSuma(a, b) {
    if (a == b){
        return((a + b)*3);
    }else{
        return(a + b);
    }
}
console.log(calcularSuma(a, b))
