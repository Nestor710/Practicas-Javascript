import { rejects } from "assert";
import { Resolver } from "dns";
import { resolve } from "path";

let prom1 = new Promise( function(resolve, reject ){

    setTimeout(  ()=>{
        console.log('Promesa Terminada');
        // Termina bien
        resolve()

        // Termina mal
        // reject() 

    }, 1500 )

    console.log('Paso 1');
    

})

prom1.then( function(){
    console.log('Ejecutarme cuando termine bien');
},
function(){
    console.error('Ejecutarme si todo sale mal')
})

console.log('Paso 2');
