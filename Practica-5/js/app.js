EventListener();

let arregloNumerosPrimosGlobal = [];

function FillArrayGlobal() {
    for (let i = 0; i < 1000; i++) {
        let bandera = true;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                bandera = false;
                break;
            }
        }

        if (bandera) {
            arregloNumerosPrimosGlobal.push(i);
        }
    }

    console.log(arregloNumerosPrimosGlobal);
}

function EventListener() {
    document.addEventListener('DOMContentLoaded', FillArrayGlobal);
    document.getElementById('tamanoArray').addEventListener('keypress', InitApp);
}

function InitApp(event) {
    if (event.key !== 'Enter') return;
    if (event.target.value == '') return;
    if (isNaN(event.target.value)) return;
    if (event.target.value <= 0) return;

    FillArray(event.target.value);
}

function FillArray(tamanoArray) {

    let arregloNumerosPrimos = [];
    let suma = 0;
    let mayor = 0;

    for (let i = 0; i < tamanoArray; i++) {
        let numeroAleatorio = Math.floor(Math.random() * (arregloNumerosPrimosGlobal.length - 1)) + 1;
        arregloNumerosPrimos.push(arregloNumerosPrimosGlobal[numeroAleatorio]);
        if (arregloNumerosPrimos[i] > mayor) mayor = arregloNumerosPrimos[i];
    }

    console.log(arregloNumerosPrimos);

    MostrarValores(arregloNumerosPrimos);
}

function MostrarValores(arregloPrimos) {
    const listGroup = document.getElementById('listaArreglo');
    for (let i = 0; i < arregloPrimos.length; i++) {
        const li = document.createElement('li');
        li.setAttribute('class', 'list-group-item');
        li.innerText = `Index ${i + 1} - Valor ${arregloPrimos[i]}`;
        listGroup.appendChild(li);
    }
    let suma = SumaArreglo(arregloPrimos);
    let mayor = NumeroMayor(arregloPrimos);

    const sumaArreglo = document.createElement('li');
    sumaArreglo.setAttribute('class', 'list-group-item');
    sumaArreglo.innerText = `La suma del Arreglo es ${suma}`;
    listGroup.appendChild(sumaArreglo);

    const numMayor = document.createElement('li');
    numMayor.setAttribute('class', 'list-group-item');
    numMayor.innerText = `El numero mayor es ${mayor}`;
    listGroup.appendChild(numMayor);
}

function NumeroMayor(arreglo) {
    let mayor = 0;

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) mayor = arreglo[i];
    }

    return mayor;
}

function SumaArreglo(arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }

    return suma;
}