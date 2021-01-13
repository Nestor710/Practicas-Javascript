var numero=0;

while (numero < 2 || numero >10) {
    
    numero=Number(prompt("elige una tabla de multiplicar entre 2 y 10"));
    
}

var x=1;

while (x<=10) {

    console.log(numero + " * " + x + " = " + numero * x);
    x++;
    
}
