import { string } from "yargs";

class Avengers {
    nombre:string = "Sin nombre";
    equipo:string = "undefined";
    nombreReal:string = "undefined";

    puedePelear:boolean = false;
    peleasGanadas:number = 0;

    constructor( nombre:string, equipo:string, nombreReal:string, puedePelear:boolean, peleasGanadas:number ){
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;

        this.puedePelear = puedePelear;
    }
}

let antman:Avengers = new Avengers( "Antman", "cap", "Scott lang", true, 7 );

console.log(antman);


class Avion {
    nombre:string;
    aerolinea:string;
    color:string;
    modelo:string;
    constructor( nombre:string, aerolinea:string, color:string, modelo:string ){

        this.nombre = nombre;
        this.aerolinea = aerolinea;
        this.color = color;
        this.modelo = modelo;

    }
}

let avion:Avion = new Avion( "Bell X-1 ", "Emirates", "White", "Airbus A340-200" );

console.log(avion);


class Habitacion {
    paredes:string;
    color:string;
    closets:string;
    camas:string;

    constructor( paredes:string, color:string, closets:string, camas:string ){

        this.paredes = paredes;
        this.color = color;
        this.closets = closets;
        this.camas = camas;

    }
}

let habitacion:Habitacion = new Habitacion( "De bloque", "Blue", "De madera", "bots" );

console.log(habitacion);

class Vehiculo {
    color:string;
    año:number;
    puertas:string;
    marca:string;
    ventanas:string;

    constructor( color:string, año:number, puertas:string, marca:string, ventanas:string ){

        this.color = color;
        this.año = año;
        this.puertas = puertas;
        this.marca = marca;
        this.ventanas = ventanas;

    }
}

let carro:Vehiculo = new Vehiculo("Orange", 2007, "De madera", "Mazda 6", "De vidrio");

console.log(carro);

