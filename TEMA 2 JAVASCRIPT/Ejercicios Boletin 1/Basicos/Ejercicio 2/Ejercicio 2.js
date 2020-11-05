//Escribe un programa en Javascript que permita, para un texto dado, contar 
//las vocales que tiene; imprime la salida por consola.
function contarVocales(text){
     var vocales = 0;
     for (let i = 0; i < text.length; i++) {
         if(text[i] == "a" || text[i] == "e" || text[i] == "i" || text[i] == "o" || text[i] == "u"){
            vocales++;
         }
     }
     return vocales;
 }

 texto = "Hola Mundo"
 console.log("En el texto habían " + contarVocales(texto) + " vocales.")

