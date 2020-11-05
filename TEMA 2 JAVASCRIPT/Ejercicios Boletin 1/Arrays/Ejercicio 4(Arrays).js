//Ejercicio 4
let arr1 = [1,2,3,4,5,6,7];
let arr2 = [2,1,3,4];
let r = [];

function sumar_pos_arrays(arr1, arr2){
    if(arr1.length>arr2.length){
        for(i = 0; i < arr1.length; i++){
            if(arr2[i] === undefined){
                arr2[i] = 0;
                r[i] = arr1[i] + arr2[i];       
            }else{
                r[i] =arr1[i]+arr2[i];
            }
            
        }    
    }else{
        for(i = 0; i < arr2.length; i++){
            if(arr1[i] === undefined){
                arr1[i] = 0;
                r[i] = arr1[i]+arr2[i];
            }else{
                r[i] = arr1[i]+arr2[i];
            }
        
        }
    } 
    
    return r;
}   

console.log(sumar_pos_arrays(arr1, arr2));