$(document).ready(function () {
    
    $("#form_datos").validator();

});

function limpiar_form() {

    document.getElementById("form_datos").reset();
    
}