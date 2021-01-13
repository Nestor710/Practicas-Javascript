$(document).ready(function () {

    $("html").dblclick(function(){

        alert("Hola bobolon")

    })

    $("a").mouseover(function(){

        var mensaje="<p>Estas pasando por encima del link</p>";

        $("#principal").append(mensaje);

    });

    $("#el_boton").click(function(){

        $(this).val("Preciona aquí");

    })

    $("#el_campo").focus(function(){

        $(this).val("Escribe aquí");

    })
});