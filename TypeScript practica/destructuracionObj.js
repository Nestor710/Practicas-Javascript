"use strict";
var avenger = {
    nombre: "Steve",
    apodo: "Capitan america",
    poder: "Droga"
};
var nombre = avenger.nombre, apodo = avenger.apodo, poder = avenger.poder;
var nombre = avenger.nombre;
var apodo = avenger.apodo;
var poder = avenger.poder;
console.log(nombre, apodo, poder);
//Ahora destructuracion de arrays:
var avengers = ["Thor", "steve", "tony"];
var thor = avengers[0], Capitan = avengers[1], ironman = avengers[2];
console.log(thor, Capitan, ironman);
