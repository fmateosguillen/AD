//Escribe una función en Javascript que reciba como argumento otra función.
function func1(callback) {
    callback();
}

func1(function(){
    alert('Hola Mundo');
});