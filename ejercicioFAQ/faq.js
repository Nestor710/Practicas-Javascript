$(document).ready(function () {
    
    $(".respuesta").hide();

    $("h3").click(function(){

        $(this).next(".respuesta").fadeToggle();

        $(this).toggleClass("cerrar");

    })

});