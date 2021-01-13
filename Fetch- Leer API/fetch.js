var contenido = document.querySelector('#contenido');

async function traer() {

    //  fetch('https://randomuser.me/api')
    // .then(res => res.json())
    // .then(data =>{

    //     /* console.log('dentro!!');
    //     console.log(data.results['0']) */
    //     contenido.innerHTML = `
    //     <img src="${data.results['0'].picture.medium}" width="100px" class="img fluid rounded-circle">
    //     <p>Nombre: ${data.results['0'].name.first} ${data.results['0'].name.last} </p>
    //     <p>Email: ${data.results['0'].email}</p>
    //     <p>Genero: ${data.results['0'].gender}</p>
    //     <p>Edad: ${data.results['0'].dob.age}<p/>
    //     <p>Numero de telefono: ${data.results['0'].phone}</p>
    //     `
    // })
    // .catch(err=>{
    //     console.log('err',err);
    // });



    data = await fetch('https://randomuser.me/api')
            .then(res=>res.json())
            .catch(err=>err)

console.log(data);

    contenido.innerHTML = `
    <img src="${data.results['0'].picture.medium}" width="100px" class="img fluid rounded-circle">
    <p>Nombre: ${data.results['0'].name.first} ${data.results['0'].name.last} </p>
    <p>Email: ${data.results['0'].email}</p>
    <p>Genero: ${data.results['0'].gender}</p>
    <p>Edad: ${data.results['0'].dob.age}<p/>
    <p>Numero de telefono: ${data.results['0'].phone}</p>
    `

        // Esto es el bootstrap    

    contenido.innerHTML = `
    
        <div class="card" style="width: 16rem;">
            <img src="${data.results['0'].picture.medium}"  class="card-img-top img fluid rounded-circle"" alt="...">
            <div class="card-body">
                <h5 class="card-title">Nombre: ${data.results['0'].name.first} ${data.results['0'].name.last}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Email: ${data.results['0'].email}</li>
                <li class="list-group-item"> Género: ${data.results['0'].gender}</li>
                <li class="list-group-item">Edad: ${data.results['0'].dob.age}</li>
                <li class="list-group-item">N° telefonico: ${data.results['0'].phone}</li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>
    `;
    // Termina el bootstrap


    let resultado = await miPromesa('holas');
      
    console.log('resultado',resultado);


    console.log('FUERA!');


}

function miPromesa(texto) {

    return new Promise( (resolv,err)=>{
            if (texto=='hola') {
                return resolv('felicidades');
            }else{
                return err('no es hola')
            }

    } );

}