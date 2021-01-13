
var num1=prompt("Introduce el primer numero");

var num2=prompt("Introduce el segundo numero");

if(!isNaN(num1) && !isNaN(num2)){

        var operacion=prompt("Que operacion deseas realizar?  suma/resta/multiplicacion/division").toLowerCase();

        if(operacion=="suma"){

           alert(parseInt(num1)+parseInt(num2));

    }
        else if(operacion=="resta") {

           alert(parseInt(num1)-parseInt(num2));

    }
       else if(operacion=="multiplicacion") {

          alert(parseInt(num1)*parseInt(num2));

    }
        else if(operacion=="division") {

          alert(parseInt(num1)/parseInt(num2));

    }
        else {
          alert("Operacion no contemplada");

    }

}
else {

    if(typeof(num1)=="string"||typeof(num2)=="string"){
 
          alert("has introducido un texto");
 
     }
     else{
         alert("ha ocurrido un error no identificado");
     }
 } 

 

 