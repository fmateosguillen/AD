//Este ejercicio require también de algo de HTML. Escribe un programa de JavaScript donde el
//programa toma un número entero aleatorio entre 1 y 10, luego se le pide al usuario que ingrese un
//número aproximado. Si la entrada del usuario coincide con el número aleatorio, el programa mostrará
//un mensaje "Buen trabajo"; de lo contrario, mostrará un mensaje "No coincide".
function igual_random(){
    var random = parseInt(Math.floor(Math.random() * 10) + 1);
    console.log("El numero random es " + random);
    var numero = parseInt(document.getElementById("numero").value);
    if(numero == random){
        console.log("¡Enhorabuena!");
    }else{
        console.log("Has fallado");
        }
 }
