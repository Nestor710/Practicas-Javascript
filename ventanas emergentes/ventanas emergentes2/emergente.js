$(document).ready(function () {

    var propVent="width=300, height=300, left=300, top=300, scrollars=no, toolbars=no";
    var miVentana=open("https://www.pildorasinformaticas.es/", "Pildoras", propVent);

    $("#botonCerrar").click(function(e){

        miVentana.close();

    })
});