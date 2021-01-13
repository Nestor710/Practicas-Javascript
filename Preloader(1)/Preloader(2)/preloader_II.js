$(document).ready(function () {

    var foto_hover=["../../each y funcion anonima/imgs/1.jpg",
            "../../each y funcion anonima/imgs/2.jpg",
            "../../each y funcion anonima/imgs/3.jpg",
            "../../each y funcion anonima/imgs/4.jpg"]

    var imagenes=[];

    for (let i = 0; i < foto_hover.length; i++) {
        
        imagenes[i]=new Image();

        imagenes[i].src=foto_hover[i];        
    }
    
    $("img").each(function(){

        $(this).hover(cambiar , restaurar)

    })

    function cambiar(e) {

        if (e.target==img1) {

            $("#img1").attr("src", imagenes[0].src);   
                     
        }else if (e.target==img2) {

            $("#img2").attr("src", imagenes[1].src);
            
        }else if (e.target==img3) {

            $("#img3").attr("src", imagenes[2].src);
            
        }else if (e.target==img4) {

            $("#img4").attr("src", imagenes[3].src);
            
        }
        
    }

    function restaurar(e) {

        if (e.target==img1) {
            
            $("#img1").attr("src", "../../each y funcion anonima/imgs/imgs2/1.jpg");

        }else if (e.target==img2) {

            $("#img2").attr("src", "../../each y funcion anonima/imgs/imgs2/2.jpg");
            
        }else if (e.target==img3) {

            $("#img3").attr("src", "../../each y funcion anonima/imgs/imgs2/3.jpg")
            
        }else if (e.target==img4) {

            $("#img4").attr("src", "../../each y funcion anonima/imgs/imgs2/4.jpg")
            
        }
        
    }

});