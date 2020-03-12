let contadorInputs = 0;
let arregloPromedio = [];
const output = document.getElementById('output');

eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', AddEvents); //Da mas seguridad a la aplicacion 
}

function AddEvents() {
    document.getElementById('addInput').addEventListener('click', AddInput);
    document.getElementById('calcProm').addEventListener('click', CalcularPromedio);
}


function AddInput() {

    const divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12');

    const divFG = document.createElement('div');
    divFG.setAttribute('class', 'form-group');

    const label = document.createElement('label');
    label.innerText = `Ingrese la calificacion ${contadorInputs + 1}`;

    const inputFC = document.createElement('input');
    inputFC.setAttribute('class', 'form-control');
    inputFC.setAttribute('type', 'number');
    inputFC.setAttribute('placeholder', 'Ingrese valor');
    inputFC.setAttribute('id', `inputPromedio${contadorInputs}`);

    contadorInputs++;

    output.appendChild(divCol);
    divCol.appendChild(divFG);
    divFG.appendChild(label);
    divFG.appendChild(inputFC);

}

function CalcularPromedio() {
    LlenarArray();
    let acumulador = 0;
    for (let i = 0; i < contadorInputs; i++) {
        acumulador += arregloPromedio[i];
    }
    acumulador /= contadorInputs;

    const divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12');

    const alert = document.createElement('div');
    alert.setAttribute('class', 'alert alert-success');
    alert.setAttribute('id', 'divAlert');

    output.appendChild(divCol);
    divCol.appendChild(alert);

    alert.innerText = `El promedio es ${acumulador}`;
}

function LlenarArray() {
    for (let x = 0; x < contadorInputs; x++) {
        const valor = document.getElementById(`inputPromedio${x}`).value;
        if (!isNaN(valor)) {
            arregloPromedio[x] = Number(valor);
        } else {
            arregloPromedio[x] = 0;
        }
    }
}