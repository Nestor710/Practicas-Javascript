/*var articulos=["zapatos", "camisa", "pantalon", "calcetines"];
//var articulos=new Array=("zapatos", "camisa", "pantalon", "calcetines");

//var articulos=[];


document.write("<p> El primer articulo es: <strong>");
    document.write(articulos[0] + "</strong></p>");
*/

//Formas de declarar un array
//Ejemplo:

var ligas= ["BUNDESLIGA", "PREMIER", "SERIEA", "LALIGA"];

//var ligas=new Array("bundesliga", "premier", "serieA", "LaLiga");

//var liga=[];


//metodos arrays

/*document.write("<p> La liga espanola es <strong>");

document.write(LaLga[3] + "</strong></p>");
*/
alert(ligas.length);


document.write("<p>La liga espanola es <strong>");

document.write(ligas[ligas.length-1] + "</strong></p>");

document.write("<p>La liga alemana es la <strong>");

document.write(ligas[0] + "</strong></p>");

ligas.unshift("UEFA CHAMPIONS LEAGUE");

document.write("<p>La Liga mas grande del mundo es la <strong>");

document.write(ligas[0] + "</strong></p>");

document.write("<p>Otra de las ligas mas importantes del mundo es la <strong>");

ligas.push(prompt("introduce la liga que creas que sea una de las mejores"));

document.write(ligas[ligas.length-1] + "</strong></p>");

document.write("<p>" + ligas[0] + "<br/>");

document.write(ligas[1] + "<br/>");

document.write(ligas[2] + "<br/>");

document.write(ligas[3] + "<br/>");

document.write(ligas[4] + "<br/>");

document.write(ligas[5] + "<br/></p>");

alert("Borraremos la primera liga :(");

ligas.shift();

document.write("<p>" + ligas[0] + "<br/>");

document.write(ligas[1] + "<br/>");

document.write(ligas[2] + "<br/>");

document.write(ligas[3] + "<br/>");

document.write(ligas[4] + "<br/></p>");

alert("Borraremos la ultima liga :(")

ligas.pop();

document.write("<p>" + ligas[0] + "<br/>");

document.write(ligas[1] + "<br/>");

document.write(ligas[2] + "<br/>");

document.write(ligas[3] + "<br/></p>");
