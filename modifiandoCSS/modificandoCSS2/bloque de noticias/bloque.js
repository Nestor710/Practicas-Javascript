$(document).ready(function () {

    var botones=document.querySelectorAll("input");

  for (let i = 0; i < botones.length; i++) {

      botones[i].addEventListener("click", modo_lectura, false);
      
  }

  function modo_lectura(e) {
      
    var zonaActuacion;
      
    if (e.target==m_lectura1) {
        
        zonaActuacion="#noticia1";

    }else if (e.target==m_lectura2) {
        
        zonaActuacion="#noticia2";

    }else if (e.target==m_lectura3) {
        
        zonaActuacion="#noticia3";

    }

    $(zonaActuacion).css({"background-color" : "black" ,
                        "font-size" : "20px",
                        "text-align" : "justify",
                        "color" : "white"} )

  }
  

});