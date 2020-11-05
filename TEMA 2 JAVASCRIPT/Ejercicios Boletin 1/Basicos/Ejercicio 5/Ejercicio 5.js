//Escribe un programa JavaScript para crear una nueva cadena a partir de una cadena dada, tomando los
//últimos 3 caracteres y agregándolos al principio y al final. La longitud de la cadena de entrada debe ser
//3 o más.

var texto = "la";
function tresLetras(texto) {
    if (texto.length >= 3){
        letras = texto.slice(texto.length - 3, texto.length);
        texto = letras + texto + letras;
        console.log(texto); 
    }else{
        console.log("El texo introducido debe tener al menos 3 caracteres");
    }
    
}
tresLetras(texto);
