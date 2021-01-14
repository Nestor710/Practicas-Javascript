"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Avengers = /** @class */ (function () {
    function Avengers(nombre, equipo, nombreReal, puedePelear, peleasGanadas) {
        this.nombre = "Sin nombre";
        this.equipo = "undefined";
        this.nombreReal = "undefined";
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
        this.puedePelear = puedePelear;
    }
    return Avengers;
}());
var antman = new Avengers("Antman", "cap", "Scott lang", true, 7);
console.log(antman);
var Avion = /** @class */ (function () {
    function Avion(nombre, aerolinea, color, modelo) {
        this.nombre = nombre;
        this.aerolinea = aerolinea;
        this.color = color;
        this.modelo = modelo;
    }
    return Avion;
}());
var avion = new Avion("Bell X-1 ", "Emirates", "White", "Airbus A340-200");
console.log(avion);
var Habitacion = /** @class */ (function () {
    function Habitacion(paredes, color, closets, camas) {
        this.paredes = paredes;
        this.color = color;
        this.closets = closets;
        this.camas = camas;
    }
    return Habitacion;
}());
var habitacion = new Habitacion("De bloque", "Blue", "De madera", "bots");
console.log(habitacion);
var Vehiculo = /** @class */ (function () {
    function Vehiculo(color, año, puertas, marca, ventanas) {
        this.color = color;
        this.año = año;
        this.puertas = puertas;
        this.marca = marca;
        this.ventanas = ventanas;
    }
    return Vehiculo;
}());
var carro = new Vehiculo("Orange", 2007, "De madera", "Mazda 6", "De vidrio");
console.log(carro);
