$(document).ready(function(){

    var botones=document.querySelectorAll("input");

    for (let i = 0; i < botones.length; i++) {

        botones[i].addEventListener("click", aumentar, false);

        botones[i].addEventListener("click", disminuir, false);
        
    }

   /* document.getElementById("aumentar1").addEventListener("click", aumentar, false);

    document.getElementById("disminuir1").addEventListener("click", disminuir, false);

    document.getElementById("aumentar2").addEventListener("click", aumentar, false);

    document.getElementById("disminuir2").addEventListener("click", disminuir, false);

    document.getElementById("aumentar3").addEventListener("click", aumentar, false);

    document.getElementById("disminuir3").addEventListener("click", disminuir, false); */

})

function aumentar(e) {

    var zonaActuacion;

    if (e.target==aumentar1) {
     
        zonaActuacion="#noticia1";

    }else if (e.target==aumentar2) {
        
        zonaActuacion="#noticia2";

    }else if (e.target==aumentar3) {
        
        zonaActuacion="#noticia3";

    }

  
    var tamDefecto=$(zonaActuacion).css("font-size");

    //alert(tamDefecto);
    
        tamDefecto=parseInt(tamDefecto);

    $(zonaActuacion).css("font-size", tamDefecto+1);

}

function disminuir(e) {

    var zonaActuacion;

    if (e.target==disminuir1) {
     
        zonaActuacion="#noticia1";

    }else if (e.target==disminuir2) {
        
        zonaActuacion="#noticia2";

    }else if (e.target==disminuir3) {
        
        zonaActuacion="#noticia3";

    }
    
    var tamDefecto=$(zonaActuacion).css("font-size");

        tamDefecto=parseInt(tamDefecto);

    $(zonaActuacion).css("font-size", tamDefecto*0.95);


}



