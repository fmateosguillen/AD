//Ejercicio 4
let reloj = {
    hora : 0,
    minuto : 0,
    segundo : 0
};

function run(reloj){
    momentoActual = new Date()
    reloj.hora = momentoActual.getHours()
    reloj.minuto = momentoActual.getMinutes()
    reloj.segundo = momentoActual.getSeconds()

    var imprimirHora = reloj.hora + " : " + reloj.minuto + " : " + reloj.segundo;

    console.log(imprimirHora);

    setTimeout("run(reloj)",1000)
}

run(reloj);
