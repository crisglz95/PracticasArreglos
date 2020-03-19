let arregloNumeros = [];
let arregloNumeros2 = [];

EventListener();

function EventListener() {
    document.getElementById('tamanoArray').addEventListener('keypress', InitApp);
}

function InitApp(event) {
    if (event.key !== 'Enter') return;
    if (event.target.value == '') return;
    if (isNaN(event.target.value)) return;
    if (event.target.value <= 0) return;

    fillArrays(event.target.value);

}

function fillArrays(tamanoArray) {

    for (let i = 0; i < tamanoArray; i++) {
        let numeroAleatorio = Math.floor(Math.random() * (101 + 100)) - 100;
        arregloNumeros.push(numeroAleatorio);
        numeroAleatorio = Math.floor(Math.random() * (101 + 100)) - 100;
        arregloNumeros2.push(numeroAleatorio);
    }

    createOptions();

}

function createOptions() {
    const output = document.getElementById('output');

    let selector = document.createElement('select');
    selector.setAttribute('class', 'form-control');
    selector.setAttribute('id', 'idSelect');

    let opDefault = document.createElement('option');
    opDefault.setAttribute('value', 'Sin Valor');
    let txt = document.createTextNode('Seleccione la operacion deseada');
    opDefault.appendChild(txt);

    let op1 = document.createElement('option');
    op1.setAttribute('value', 'suma');
    let txt1 = document.createTextNode('C = A + B');
    op1.appendChild(txt1);

    let op2 = document.createElement('option');
    op2.setAttribute('value', 'resta');
    let txt2 = document.createTextNode('C = B - A');
    op2.appendChild(txt2);

    let op3 = document.createElement('option');
    op3.setAttribute('value', 'multiplicacion');
    let txt3 = document.createTextNode('C = A * B');
    op3.appendChild(txt3);

    let Array1 = document.createElement('div');
    Array1.setAttribute('class', 'alert alert-success mt-3');
    Array1.innerText = `Arreglo 1 ${arregloNumeros}`;

    let Array2 = document.createElement('div');
    Array2.setAttribute('class', 'alert alert-success mt-3');
    Array2.innerText = `Arreglo 2 ${arregloNumeros2}`;

    let resultado = document.createElement('div');
    resultado.setAttribute('class', 'alert alert-primary mt-3');
    resultado.setAttribute('id', 'resultadoOperacion');


    output.appendChild(selector);
    selector.appendChild(opDefault);
    selector.appendChild(op1);
    selector.appendChild(op2);
    selector.appendChild(op3);
    output.appendChild(Array1);
    output.appendChild(Array2);
    output.appendChild(resultado);

    document.getElementById('idSelect').addEventListener('change', RealizarOperaciones);
}

function RealizarOperaciones() {
    arrayResultado = [];
    op = document.getElementById('idSelect').value;

    switch (op) {
        case 'suma':
            for (let i = 0; i < arregloNumeros.length; i++) {
                arrayResultado[i] = arregloNumeros[i] + arregloNumeros2[i];
            }
            break;
        case 'resta':
            for (let i = 0; i < arregloNumeros.length; i++) {
                arrayResultado[i] = arregloNumeros2[i] - arregloNumeros[i];
            }
            break;
        case 'multiplicacion':
            for (let i = 0; i < arregloNumeros.length; i++) {
                arrayResultado[i] = arregloNumeros[i] * arregloNumeros2[i];
            }
            break;
    }

    let resultado = document.getElementById('resultadoOperacion');
    resultado.innerText = `Resultado: ${arrayResultado}`;


}