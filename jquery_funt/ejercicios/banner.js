$(document).ready(function(){
    
    /*var e=document.getElementById("cerrar");
    e.addEventListener("click", cerrar_banner, false);*/
    document.getElementById("cerrar").addEventListener("click", cerrar_banner, false);

    var imagenes=document.querySelectorAll("#logos_futbol img");

    for (let i = 0; i < imagenes.length; i++) {
        
        imagenes[i].addEventListener("click", carrito, false);
        
    }
})

function cerrar_banner() {
    
    $("#banner").remove();

}

function carrito(num) {
    
    if (num.target==imagen1) {
        
    $("#imagen1").replaceWith("<div id='imagen1'>Agregado al carrito<br/>el logo del Barcelona</di>");

    }

    if (num.target==imagen2) {
        
    $("#imagen2").replaceWith("<div id='imagen2'>Agregado al carrito<br/>el logo del Bayern Munich</di>");

    }

    if (num.target==imagen3) {
        
    $("#imagen3").replaceWith("<div id='imagen3'>Agregado al carrito<br/>el logo del PSG</di>");

    }
    if (num.target==imagen4) {
        
    $("#imagen4").replaceWith("<div id='imagen4'>Agregado al carrito<br/>el logo del Real Madrid</di>");

    }
}