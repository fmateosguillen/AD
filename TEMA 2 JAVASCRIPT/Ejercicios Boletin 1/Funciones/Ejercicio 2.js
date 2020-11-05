//Escribe una función en Javascript que, reciba una cadena de caracteres y una letra, y devuelva el
//número de ocurrencias de la letra en la cadena de caracteres.
function contarLetras(frase, letra){
    var indices = [];
    for(var i = 0; i < frase.length; i++) {
	    if (frase[i].toLowerCase() === letra) indices.push(i);
    }
    return indices.length;
}
var frase = "LLeva la tarara un vestido blanco lleno de cascabeles";
var letra = "a";
alert("La frase a analizar es: " + frase);
alert("La letra que se va a buscar es: " + letra);
var coincidencias = contarLetras(frase, letra);
alert("Hay: " + coincidencias + " coincidencias");