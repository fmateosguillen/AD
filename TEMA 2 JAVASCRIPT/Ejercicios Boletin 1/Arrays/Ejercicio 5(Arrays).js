//Ejercicio 5
const biblioteca = [
    { autor: 'Fernando Aramburu', titulo: 'Patria', id: 1254},
    { autor: 'Dan Brown', titulo: 'Inferno', id: 4264},
    { autor: 'Suzanne Collins', titulo: 'Los juegos del hambre', id: 3245}
    ];

function ordenar_por_titulo(arr){
    arr.sort(function(a, b){
        if (a.titulo > b.titulo) {
            return 1;
          }
          if (a.titulo < b.titulo) {
            return -1;
          }
          return 0;
    });
}
ordenar_por_titulo(biblioteca);
console.log(biblioteca);