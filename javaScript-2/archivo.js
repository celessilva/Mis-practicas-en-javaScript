//tipos de datos


//numericos
var num=2;
var edad = 21;
alert("su edad es: " + edad + " aca estamos probando el tipo de dato numerico: " + num)


//strings
var nombre = "celeste";
var apellido = "silva";
var string = "aca estamos viendo los tipos de datos strings"

document.write(nombre +" "+apellido + " "+string);

//arrays o arreglos son conjuntos de elementos
var array = ["Celeste", "Camila" ,"Bautista","Valentina", "Thiago", "Maximiliano"]

document.write(array[5]); // de esta forma accedemos a maxi



//objet o objetos
var objeto = {
    color: "negro",
    size: 40,
}


//booleanos
var bool= true; // tambien puede ser false


//undefined   sin definir / no estaa definido

var sindefinir;

document.write(sindefinir);   // asi me la trae sin definir a la variable

//null   es nulo/ vacio

var numeritos = 10;
//ahora yo ese diez quiero que sea borrado , no sirve q yo lo cambie a 0 por ej, le paso el null y me lo lleva a nulo ,borrado,reiniciado.

var numeritos = null;


//NaN    

var texto = "hola";

document.write(texto*2);  // esto me tiraria un nan , no es logico multiplicar un string

//no es valido el nan