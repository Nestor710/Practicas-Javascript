var trabajadores=new Array();

var personas="";

var contador=0;

while (personas!="salir") {

    personas=prompt("Introduce trabajadores");

    trabajadores[contador]=personas;

    contador++;
}

trabajadores.pop();

for (var i=0; i<trabajadores.length;i++) {

    document.write(trabajadores[i] + "<br/>");

}