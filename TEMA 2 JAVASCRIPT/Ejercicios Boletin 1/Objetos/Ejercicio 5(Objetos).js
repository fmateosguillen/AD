//Ejercicio 5
let prop = "autor";
const biblioteca = [
    { autor: 'Fernando Aramburu', titulo: 'Patria', id: 1254},
    { autor: 'Dan Brown', titulo: 'Inferno', id: 4264},
    { autor: 'Suzanne Collins', titulo: 'Los juegos del hambre', id: 3245}
    ];
   
function ordenar_por_prop(arr, prop){
    arr.sort(function(a, b){
        if (a[prop] > b[prop]) {
            return 1;
          }
          if (a[prop] < b[prop]) {
            return -1;
          }
          return 0;
    });
}

ordenar_por_prop(biblioteca, prop);
console.log(biblioteca);