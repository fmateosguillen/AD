//Ejercicio 3
let cilindro = {
    radio : 4,
    altura : 5
};

function volumen_cilindro(cilindro) {
    volumen = Math.PI * Math.pow(cilindro.radio, 2) * cilindro.altura;
    console.log(volumen.toFixed(2));
}

volumen_cilindro(cilindro);