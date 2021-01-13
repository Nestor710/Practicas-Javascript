var aleatorio=Math.round(Math.random()*100);

var minum, intentos;

minum=0;

intentos=0;

var mensaje=document.getElementById("c_mensajes");

var intentos_consumidos=document.getElementById("c_intentos");

var resultado=document.getElementById("c_result");

do {
    minum=prompt("ingrese un numero entre 1 y 100");

    if (aleatorio>minum) {

        mensaje.value="Mas alto";
        mensaje.style.color="green";
        mensaje.style.fontSize="20px";
        mensaje.style.textAlign="center";


    }else if (aleatorio<minum) {

        mensaje.value="Mas bajo";
        mensaje.style.color="red";
        mensaje.style.fontSize="20px"
        mensaje.style.textAlign="center";

    }intentos++;

    intentos_consumidos.value=intentos;
    intentos_consumidos.style.fontSize="20px";
    intentos_consumidos.style.color="blue";
    intentos_consumidos.style.textAlign="center";

} while (aleatorio!=minum);
    resultado.value="Correcto!";
    resultado.style.fontSize="20px";
    resultado.style.color="purple";
    resultado.style.textAlign="center";
