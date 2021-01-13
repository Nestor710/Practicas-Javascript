document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatos() {
    
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'datos.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            // console.log(this.responseText);

            var datos = JSON.parse(this.responseText);
            console.log(datos);

            let res = document.querySelector('#res');
            res.innerHTML = '';           

            for (const item of datos) {
               // console.log(item.titulo);

               res.innerHTML += `
                <tr>
                    <th>${item.titulo}</th>
                    <th>${item.artista}</th>
                </tr>
               ` 

            }
        }
    }

}