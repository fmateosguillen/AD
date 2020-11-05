//Escribe una función en Javascript que reciba un array con los nombres y notas de unos estudiantes, y
//las traduzca a su respectivo literal:
let estudiantes = [["Luismi", 7], ["Miguel", 6], ["Ángel", 9]];
function traducirNotas(){
    for (var i = 0; i < estudiantes.length; i++) {
        for (var x = 0; x < 1; x++) {
            let nota = estudiantes[i][1];
            if(nota >= 0 && nota < 4){
                nota = "INSUFICIENTE";
            }
            if(nota == 5){
                nota = "SUFICIENTE";
            }
            if(nota == 6){
                nota = "BIEN";
            }
            if(nota >= 7 && nota <= 8){
                nota = "NOTABLE";
            }
            if(nota >= 9 && nota <= 10){
                nota = "SOBRESALIENTE";
            }
            estudiantes[i][1] = nota;
        }
    }
    return estudiantes;
}

console.log(traducirNotas(estudiantes));