// Variables globales
//verificarVariable();

const btnBotones = document.querySelector('#btnBotones');

const botones = document.querySelector('#botones');

const fondo = document.querySelector('#fondo');

// const mensaje = document.querySelector('#mensaje');

(() =>{

    btnBotones.addEventListener('click', agregarBotones);

    botones.addEventListener('click', delegacion);

})();

(() =>{

    const color = localStorage.getItem('colorFondo');

    if (color === null) {
        fondo.className = 'bg-dark';
    }else{
        fondo.className = color;
    }

})();

(() =>{

    const respuesta = localStorage.getItem('mensaje');
    respuesta = JSON.parse();

    if (respuesta) {
        document.querySelector('#h2').innerHTML = 'mensaje';
    }

})();

function delegacion(e) {
    e.preventDefault();
    //console.log(e.target.classList[1]);
    const colorFondo = e.target.classList[1];

    switch (colorFondo) {
        case ('btn-primary'):
            fondo.className = 'bg-primary';
            localStorage.setItem('colorFondo', 'bg-primary');
            localStorage.setItem('mensaje', 'Es color azul');
            break;

        case ('btn-secondary'):
            fondo.className = 'bg-secondary';
            localStorage.setItem('colorFondo', 'bg-secondary');
            localStorage.setItem('mensaje', 'Es color gris');
            break;
            
        case ('btn-danger'):
            fondo.className = 'bg-danger';
            localStorage.setItem('colorFondo', 'bg-danger');
            localStorage.setItem('mensaje', 'Es color rojo');
            break;
            
        case ('btn-success'):
            fondo.className = 'bg-success';
            localStorage.setItem('colorFondo', 'bg-seccess');
            localStorage.setItem('mensaje', 'Es color verde');
            break;

        case ('btn-warning'):
            fondo.className = 'bg-warning';
            localStorage.setItem('colorFondo', 'bg-warning');
            localStorage.setItem('mensaje', 'Es color mostaza');
            break;
    }

}

function agregarBotones(e) {
    e.preventDefault();
    console.log('diste click en el boton negro');

    botones.innerHTML = `
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secundary</button>
    <button class="btn btn-danger">Danger</button>
    <button class="btn btn-success">Success</button>
    <button class="btn btn-warning">Warning</button>
    `
}

/* var mensaje = document.querySelector('#mensaje');

(() =>{

    button.addEventListener('click', llamar);

})();


function llamar() {

    var objecto = {
        mensaje: 'Es color azul'
    }

    document.querySelector('#mensaje').innerHTML = objecto;
    localStorage.setItem('texto', JSON.stringify(objecto));

}

function verificarVariable() {
    
    var local = localStorage.getItem('texto');
    local = JSON.parse(local);
    if (local) {
        document.querySelector('#mensaje').innerHTML = local.mensaje;
    }

}  */