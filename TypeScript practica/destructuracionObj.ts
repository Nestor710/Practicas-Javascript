let avenger = {
    nombre: "Steve",
    apodo: "Capitan america",
    poder: "Droga"
}
let { nombre, apodo, poder } = avenger;
 let nombre = avenger.nombre;
let apodo = avenger.apodo;
let poder = avenger.poder;  


console.log(nombre, apodo, poder);

//Ahora destructuracion de arrays:

let avengers:string[] = ["Thor","steve","tony"];

let [ thor, Capitan, ironman ] = avengers;
 
console.log(thor,Capitan,ironman);

