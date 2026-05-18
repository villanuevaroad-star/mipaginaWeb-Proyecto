function cargar(){

fetch("https://jsonplaceholder.typicode.com/users")

.then(respuesta => respuesta.json())

.then(datos => {

let contenido = "";

datos.forEach(usuario => {

contenido += "<p>" + usuario.name + " - " + usuario.email + "</p>";

});

document.getElementById("datos").innerHTML = contenido;

});

}