document.querySelector('#boton1').addEventListener('click', traerDatos);

function traerDatos() {
    
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'datos1.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function() {
        
        if (this.readyState == 4 && this.status == 200) {
            // console.log(this.responseText);

            var datos1 = JSON.parse(this.responseText);
            // console.log(datos1);

            let res = document.querySelector('#res');
            res.innerHTML = '';

            for (const items of datos1) {
                // console.log(items.futbolistas);

                res.innerHTML += `
            <tr>
                <th>${items.futbolistas}</th>
                <th>${items.tecnicos}</th>
                <th>${items.estadios}</th>
            </tr>
                `
            }
        }

    }

}

