//Escribe una función en Javascript que compruebe si una palabra o frase es un palíndromo.
//dabale arroz a la zorra el abad, obviando los espacios en blanco, es una frase palindrómica.
function palindromo(cadena) {

  var resultado = "La frase \""+cadena+"\" \n";

  var cadenaOriginal = cadena.toLowerCase();

  var letrasEspacios = cadenaOriginal.split("");

  var cadenaSinEspacios = "";
  for(i in letrasEspacios) {
    if(letrasEspacios[i] != " ") {
      cadenaSinEspacios += letrasEspacios[i];
    }
  }

  var letras = cadenaSinEspacios.split("");
  var letrasReves = cadenaSinEspacios.split("").reverse();

  var iguales = true;
  for(i in letras) {
    if(letras[i] == letrasReves[i]) {
    }
    else {
      iguales = false;
    }
  }

  if(iguales) {
    resultado += " es un palíndromo";
  }
  else {
    resultado += " no es un palíndromo";
  }

  return resultado;
}

alert(palindromo("dabale arroz a la zorra el abad"));
alert(palindromo("Hola Mundo"));
