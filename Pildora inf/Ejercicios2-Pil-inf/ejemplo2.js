//Ejercicios sin sumar, solo concatenar:

/*
var frutas=prompt("Introduce que fruta deseas");

var verduras=prompt("Introduce que verdura deseas");

var total_frutas=prompt("Introduce la cantidad de" + " " + frutas + " " + "que desees");

var total_verduras=prompt("Introduce la cantida de" + " " + verduras + " " + "que desees");

 
document.write("<p>");

document.write("Gracias por comprar en TIENDAS NESTOR" + "<br/>" +
"Usted eligio: " + frutas + " " +"y"+ " " + verduras + "<br/>" +
"usted compro :" + " " + total_frutas + " " + frutas + " " + "y" + " " + total_verduras + " " + verduras);

document.write("</p>");
*/

//Ejercicio decrementando:

var nombre=prompt("Introduce tu nombre por favor");
var apellido=prompt ("Introduce tu apellido por favor");
var edad=prompt ("Introduce tu edad por favor");
var restando=prompt("Introduce cuantos anos deseas quitarte");

edad-=restando;


document.write("<p>");

document.write("Bienvenido: " + nombre + " " + apellido + "<br/>" +
"Te gustaria tener:" + " " + edad + " " + "years old"); 

document.write("</p>");