$(document).ready(function () {
    
    var elementos=document.querySelectorAll("li");

    for (let i = 0; i < elementos.length; i++) {

    elementos[i].addEventListener("mousemove", pon_imagen, false);

    elementos[i].addEventListener("mouseout", quitar_imagen, false);
        
    }

});

function pon_imagen(e) {
    
    if (e.target==elem1) {
        
        $("#elem1").addClass("destacar");

        $("img").attr("src", "../imagenes/Barcelona.png")

    }else if (e.target==elem2) {
        
        $("#elem2").addClass("destacar");

        $("img").attr("src", "../imagenes/Real_Madrid.png");

    }else if (e.target==elem3) {
        
        $("#elem3").addClass("destacar");

        $("img").attr("src", "../imagenes/PSG.png");

    }else if (e.target==elem4) {
        
        $("#elem4").addClass("destacar");

        $("img").attr("src","../imagenes/BayernMunich.png");
    }

}

function quitar_imagen(e) {
    
    if (e.target==elem1) {
        
        $("elem1").removeClass("destacar");

        $("img").removeAttr("src");

    }else if (e.target==elem2) {
        
        $("elem2").removeClass("destacar");

        $("img").removeAttr(".src");

    }else if (e.target==elem3) {
        
        $("elem3").removeClass("destacar");

        $("img").removeAttr("src");

    }else if (e.target==elem4) {
        
        $("elem4").removeClass("destacar");

        $("img").removeAttr("src");

    }

}