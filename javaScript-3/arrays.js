
var amigos = ["Amelia","Matias","Lara","Jonathan","Jazmin"];

//tengo en la lista de nombres 5 personas pero el contador son 4 posiciones
//amigos.length tira 6 luego de agregar a maxi por que cuenta los elementos, no las posiciones

document.write("Tienes en la lista amigos " + amigos.length + " amigos");

//de esta forma agrego al final de la lista a maxi

amigos[amigos.length]= "Maximiliano";


// con amigos.push agregamos varios al final de la lista

amigos.push("Martina","Thiago","Valentina")

//con amigos.pop(); elimino el ultimo elemento

amigos.pop();

//con amigos.concact podemos unir dos arreglos

var amigos2 = ["Valu","Bauti"];

var amigos3 = amigos.concat(amigos2);

//con amigos.join le coloco lago intermedio de los elementos



document.write(amigos3.join(" - "));

//se ve asi: Amelia - Matias - Lara - Jonathan ......


// con sort y reverse los ordenamos
var ordenar = amigos3.sort();
document.write((ordenar,amigos3.join(" | ")));