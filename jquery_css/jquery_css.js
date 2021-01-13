$(document).ready(function(){

   // $("a[href^='http://']").addClass("linkdestacacursos");

    document.getElementById("cursos").addEventListener("click", resaltacursos, false);

    document.getElementById("informacion").addEventListener("click", resaltareEjemplos, false);



    function resaltacursos() {

        $(".ejemplos").removeClass("linkdestacaejem");

        $(".cursos").addClass("linkdestacacursos");

        /* Este ejercicio es para el boton tipo checkbox con toggleClass:
        $(".cursos").toggleClass("linkdestacacursos");*/

    }

    function resaltareEjemplos() {
        
        $(".cursos").removeClass("linkdestacacursos");

        $(".ejemplos").addClass("linkdestacaejem");

       /* Este ejemplo es para el boton tipo checkbox con toggleClass:
        $(".ejemplos").toggleClass("linkdestacaejem");*/

    }

});