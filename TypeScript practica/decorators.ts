function consola( constructor:Function ){
        console.log( constructor );
}

@consola
class Villano{
    constructor( public nombre:string ){

    }
}

function heroeNombre( constructor:Function ){

        console.log( constructor );
        

} 

@heroeNombre
class Heroe{
    constructor( public apellido:string ){

    }
}

function superHeroe( constructor:Function ){
    console.log(constructor);
    
}

@superHeroe
class Batman{
    constructor( public heroe:string ){

    }
}