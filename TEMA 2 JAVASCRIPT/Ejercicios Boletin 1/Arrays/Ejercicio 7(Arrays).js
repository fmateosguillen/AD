//Ejercicio 7
let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];
function diferencias (arr1, arr2){
    let arr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {

        }else{
            arr.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.includes(arr2[i])) {

        }else{
            arr.push(arr2[i]);
        }
    }
    return arr;
}

console.log(diferencias(arr1, arr2));