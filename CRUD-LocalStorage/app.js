// Variables globales

    const formularioUI = document.querySelector('#formulario');
    const listaActividades = document.querySelector('#listaActividades');

    let arrayActividades = [];

// Funciones

    const CrearItem = (actividad) => {

        let item = {
            actividad: actividad,
            estado: false
        }

        arrayActividades.push(item);

        return item;

    }

    const GuardarDB = () => {

        localStorage.setItem('Rutinas',JSON.stringify(arrayActividades));

        PintarDB();

    }

    const PintarDB = () => {

        listaActividades.innerHTML = '';

        arrayActividades = JSON.parse(localStorage.getItem('Rutinas'));
        
        if (arrayActividades === null) {
            arrayActividades = [];
        }else{

            arrayActividades.forEach(element => {

                if (element.estado) {
                    listaActividades.innerHTML += `
                    <div class="alert alert-success" role="alert"><span class="material-icons float-left mr-2">emoji_people</span><b>${element.actividad}</b> - ${element.estado}<span class="float-right"><span class="material-icons">done</span><span class="material-icons">delete</span></span></div>`     
                }else{
                    listaActividades.innerHTML += `
                    <div class="alert alert-danger" role="alert"><span class="material-icons float-left mr-2">emoji_people</span><b>${element.actividad}</b> - ${element.estado}<span class="float-right"><span class="material-icons">done</span><span class="material-icons">delete</span></span></div>`  
                }

                
            });
        }
    }

    const eliminarDB = (actividad) =>{

        let indexArray;

        arrayActividades.forEach((elemento, index) =>{
            
            if (elemento.actividad === actividad) {
                indexArray = index;
            }
        });

        arrayActividades.splice(indexArray,1);
        GuardarDB();
    }

    const editarDB = (actividad) =>{
        let indexArray = arrayActividades.findIndex((elemento) =>elemento.actividad===actividad)
        console.log(arrayActividades[indexArray]);

        arrayActividades[indexArray].estado = true;
        GuardarDB();
    }
// EventListener

formularioUI.addEventListener('submit', (e) =>{

    e.preventDefault();
    let actividadUI = document.querySelector('#actividad').value;
    //console.log(actividadUI);

    CrearItem(actividadUI);
    GuardarDB();

    formularioUI.reset();

});

document.addEventListener("DOMContentLoaded", PintarDB);

listaActividades.addEventListener('click', (e) =>{
    e.preventDefault();

    // console.log(e);

     if (e.target.innerHTML === 'done' || e.target.innerHTML === 'delete') {
         
        let texto = (e.path[2].childNodes[1].innerHTML);

        if (e.target.innerHTML === 'delete') {
            // Acción de eliminar
            eliminarDB(texto);
        }

        if (e.target.innerHTML === 'done') {
            // Acción de editar
            editarDB(texto);
        }
     }
})
