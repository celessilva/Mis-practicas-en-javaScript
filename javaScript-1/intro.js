
alert("Ohh Noooooooo!!! Si mi js externo Funciona");

//bueno,ahora lo probamos con una variable//

var nombre = "Celeste";


alert(nombre);

//ahora lo haremos que elusuario cargue la variable
//de este forma le pedimos al usuario su nombre//
//prompt("Ingresa tu nombre", "nombre"); , pero para almacenar ese dato
// es asi : 

var nombre;
nombre = prompt("Ingresa tu nombre", "nombre");

alert("Hola " + nombre);

//tambien denemos el document write y el console log

document.write("OK el documento");
console.log(nombre);