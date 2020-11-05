//Escribe un programa que imprima por consola la fecha actual en diferentes formatos:
var fecha = new Date();
var yyyy = fecha.getFullYear();
var mm = fecha.getMonth();
var dd = fecha.getDate();
console.log(dd + "/" + (mm+1) + "/" + yyyy);
console.log((mm+1) + "/" + dd + "/" + yyyy);
console.log(dd + "-" + (mm+1) + "-" + yyyy);
console.log((mm+1) + "-" + dd + "-" + yyyy);
