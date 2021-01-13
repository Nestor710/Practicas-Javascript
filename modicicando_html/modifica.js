$(document).ready(function () {
    
    document.getElementById("img1").addEventListener("mouseover", cambiar, false);

    document.getElementById("img1").addEventListener("mouseout", restaurar, false);
});

function cambiar() {
    
    $("img").attr("src", "../imagenes/Real_Madrid.png");

}

function restaurar() {
    
    $("img").attr("src", "../imagenes/Barcelona.png");

}