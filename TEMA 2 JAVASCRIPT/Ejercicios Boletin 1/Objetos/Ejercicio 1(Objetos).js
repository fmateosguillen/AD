//Ejercicio 1
let student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};

let prop = Object.values(student);

function mostrar_propiedades(prop){
    for (let i = 0; i < prop.length; i++) {
        console.log(prop[i]);
    }    
}

mostrar_propiedades(prop);
