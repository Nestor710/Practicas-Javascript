"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function enviarMision(xmen) {
    console.log("Enviando a: " + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log("Enviando al cuartel: " + xmen.nombre);
}
var wolverine = {
    nombre: 'Wolverine',
    poder: 'Regeneración'
};
enviarMision(wolverine);
enviarCuartel(wolverine);
