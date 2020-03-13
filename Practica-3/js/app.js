const output = document.getElementById('output');
EventListener();

function EventListener() {
    document.getElementById('mostrarInputs').addEventListener('click', mostrarInputs);
}

function mostrarInputs() {
    const numeroInputs = Number(document.getElementById('numeroInputs').value);

    if (numeroInputs > 1000 || numeroInputs <= 0) return;

    EliminarElementos();

    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    for (let i = 0; i < numeroInputs; i++) {
        const divCol = document.createElement('div');
        divCol.setAttribute('class', 'col-12');

        const divFG = document.createElement('div');
        divFG.setAttribute('class', 'form-group');

        const label = document.createElement('label');
        label.innerText = `Ingrese el numero a guardar en el arreglo`;

        const input = document.createElement('input');
        input.setAttribute('class', 'form-control');
        input.setAttribute('type', 'number');
        input.setAttribute('id', `valorInput${i}`);

        row.appendChild(divCol);
        divCol.appendChild(divFG);
        divFG.appendChild(label);
        divFG.appendChild(input);
    }
    output.appendChild(row);

    const buttonObtenerResultado = document.createElement('button');
    buttonObtenerResultado.setAttribute('class', 'btn btn-outline-success btn-block');
    buttonObtenerResultado.setAttribute('id', 'btnCalcularResultado');
    buttonObtenerResultado.innerText = 'Calcular Resultado';
    row.appendChild(buttonObtenerResultado);

    document.getElementById('btnCalcularResultado').addEventListener('click', RealizarComparacion);
}

let arreglo1 = [];

function RealizarComparacion() {
    const NumeroInputs = document.getElementsByTagName('input');
    let acumulador = 0;
    for (let x = 0; x < NumeroInputs.length; x++) {
        for (let y = x + 1; y < NumeroInputs.length; y++) {
            if (NumeroInputs[x].value == NumeroInputs[y].value) {
                NumeroInputs[y].value = '';
            }
        }
        console.log(NumeroInputs[x].value);
    }
    MostrarDatos(NumeroInputs);
}

function EliminarElementos() {
    while (output.firstChild) {
        output.firstChild.remove();
    }
}

function MostrarDatos(numeroInputArreglo) {
    for (let x = 0; x < numeroInputArreglo.length; x++) {
        if (numeroInputArreglo[x].value != '') {
            arreglo1.push(numeroInputArreglo[x].value);
        }
    }
    let alert = document.createElement('div');
    alert.setAttribute('class', 'alert alert-success mt-3');
    alert.innerText = arreglo1;

    output.appendChild(alert);
}