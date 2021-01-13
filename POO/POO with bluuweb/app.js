class Factura {
    
constructor(numeroFactura,nombreCliente,subTotal, iva){

    this.numeroFactura = numeroFactura;
    this.nombreCliente = nombreCliente;
    this.subTotal = subTotal;
    this.iva = iva;

}

    static facturaMayor(fact1, fact2){
        if (fact1 < fact2) {
            return fact1
        }else{
            return fact2
        }
    }

    retornarTotal(){
        return `${this.subTotal + this.iva}`
    }

    retornar(){
        return `El numero de factura es:${this.numeroFactura} <br>
        El nombre del cliente es: ${this.nombreCliente}<br>
        El sub total es: ${this.subTotal}<br>
        El IVA es: ${this.iva}`
    }
    
}

const total = new Factura(5,'Nestor',10,6);
const total2 = new Factura(20,'Yelitza',80,20);
const factMayor = Factura.facturaMayor(total.retornarTotal() , total2.retornarTotal() );

console.log(total.retornarTotal());
console.log(respuesta);

document.write(total.retornar() + '<br>');

document.write('La factura mayor es: ' + factMayor);










/* const pelicula = {
    nombre: 'Harry potter',
    id: 1,
    reproducir(){
        return `reproduciendo pelicula... ${this.nombre}`;
    }
}
// console.log(peliculaUno.id);

class Pelicula {

    constructor(nombre, id){
        this.nombre = nombre;
        this.id = id;
    }

    reproducir(){
        return `Reproduciendo pelicula ${this.nombre}`
    }

}

class Serie extends Pelicula{

    constructor(nombre, id, cap){

        super(nombre, id);
        this.cap = cap;

    }

    reproducirCapitulo(){
        return `Reproduciendo capitulo ${this.cap} de ${this.nombre}`
    }

}

const peliculaUno = new Pelicula('harry potter', 1);
const peliculaDos = new Pelicula('Hombre araña', 2);
const serieUno = new Serie('Stranger thnigs', 3, 55);

console.log(peliculaUno.reproducir());
console.log(peliculaDos.reproducir());
console.log(serieUno.reproducirCapitulo())  */