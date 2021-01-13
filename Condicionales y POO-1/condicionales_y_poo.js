var cuerpo=document.getElementById("cuerpo");

var colorweb=prompt("introduce un color. Azul/Rojo/Amarrillo/Verde").toLowerCase();

var result=parseInt(colorweb);

if (!isNaN(result)) {

    alert("error");
    
}else if(colorweb!="azul" && colorweb!="rojo" && colorweb!="amarillo" && colorweb!="verde") {

          alert("Ese color no esta disponible");

}
else if(colorweb=="azul") {
    cuerpo.style.backgroundColor="blue";
}
else if (colorweb=="rojo") {
    cuerpo.style.backgroundColor="red";
}
else if (colorweb=="amarillo") {
    cuerpo.style.backgroundColor="yellow";
}
else if (colorweb=="verde") {
    cuerpo.style.backgroundColor="green";
}

//esto es otra manera de hacerlo:
/*
if (colorweb=="azul") {

      cuerpo.style.backgroundColor="blue";

}

else if (colorweb=="rojo") {

      cuerpo.style.backgroundColor="red";

}

else if (colorweb=="amarillo") {

      cuerpo.style.backgroundColor="yellow";

}

else if (colorweb=="verde") {

      cuerpo.style.backgroundColor="green";

}

else {

    alert("Ese color no esta disponible");

}
*/