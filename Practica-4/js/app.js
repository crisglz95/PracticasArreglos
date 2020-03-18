EventListener();

function EventListener() {
    document.getElementById('tamanoArray').addEventListener('keypress', CrearInputs);
}

function CrearInputs(event) {
    if (event.key == 'Enter') {

        /*
         * Si isNaN = true quiere decir que no es un numero
         * Si isNaN = false, es un numero
         */
        if (isNaN(event.target.value)) return;

        RellenarArreglo(event.target.value);
    }
}

function RellenarArreglo(tamanoArray) {
    let arregloNumeroAleatorios = [];

    for (let i = 0; i < tamanoArray; i++) {
        arregloNumeroAleatorios[i] = Math.floor(Math.random() * (10 - 1) + 1);
    }
    console.log(arregloNumeroAleatorios);

    MostrarValores(arregloNumeroAleatorios);
}

function MostrarValores(arregloLleno) {
    const listGroup = document.getElementById('listaArreglo');
    let sumaArray = 0;
    for (let i = 0; i < arregloLleno.length; i++) {
        const li = document.createElement('li');
        li.setAttribute('class', 'list-group-item');
        li.innerText = `Index ${i + 1} - Valor ${arregloLleno[i]}`;
        listGroup.appendChild(li);
        sumaArray += arregloLleno[i];
    }

    const sumaArreglo = document.createElement('li');
    sumaArreglo.setAttribute('class', 'list-group-item');
    sumaArreglo.innerText = `La suma del arreglo es ${sumaArray}`;
    listGroup.appendChild(sumaArreglo);
}