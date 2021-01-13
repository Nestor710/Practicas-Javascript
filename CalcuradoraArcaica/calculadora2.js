var repetir; 

function sumar(num1, num2) {
    
    alert("la suma es: " + (num1+num2));

}

function restar(num1, num2) {
    
    alert("la resta es: " + (num1-num2));

}

function multiplicar(num1, num2) {
    
    alert("la multiplicación es: " + (num1*num2));

}

function dividir(num1, num2) {
    
    alert("la división es: " + (num1/num2));

}

do {
    
var operacion=prompt("¿Que operación deseas realizar?");

var operacion1=parseInt(prompt("Introduce el primer numero por favor"));

var operacion2=parseInt(prompt("Introdcuce el segundo numero por favor"));

if (operacion=="sumar") {

    sumar(operacion1,operacion2);

}
else if (operacion=="restar") {

    restar(operacion1,operacion2);

}
else if (operacion=="multiplicar") {

    multiplicar(operacion1,operacion2);

}
else if (operacion=="dividir") {

    dividir(operacion1,operacion2);
    
}

else{
    alert("Lo siento, operacion no contemplada");
}

repetir=prompt("¿Deseas repetir?");

} while (repetir=="si");
