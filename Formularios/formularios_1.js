$(document).ready(function () {
    
   // $("#comprobar").click(comprobar_form);

   $("#nombre").focus(function(){

    var campo_texto=$(this);

    if (campo_texto.val()==campo_texto.attr("value")) {

        campo_texto.val("");
        
    }

   })

   $("#form_datos").submit(function(){

    if ($("#nombre").val()=="" || $("#nombre").val()=="Obligatorio nombre") {

        alert("Por favor, ingresa tu nombre");

        return false;
        
    }

   });

   $("#edad").blur(function(){

    var edad_usuario=$(this).val();

    if (isNaN(edad_usuario)) {

        alert("Estas ingresando un valor equivocado")

        $(this).focus();

    } 

   });
   

});

/*function comprobar_form() {

    if ($("#masculino").attr("checked")) {

        alert("Eres un hombre");
        
    }else{
        alert("Eres una mujer")
    }

    
    $(":imput").each(funtion(){
        alert($(this).val());
    }) 
    
    Para acceder a todos los imput
    Para acceder a los campos tipo textos usar $(":text") y asi con los demas campos. ejemplo:
    $(":radio")
    $(":checkbox")
    $(":select") 
    }
    */
