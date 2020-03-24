const output = document.getElementById('output');
EventListener();

function EventListener() {
    document.getElementById('btnInit').addEventListener('click', MostrarInputs);
}

function MostrarInputs() {
    EliminarElementos();

    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    for (let i = 0; i < 10; i++) {
        const divCol = document.createElement('div');
        divCol.setAttribute('class', 'col-12');

        const divFG = document.createElement('div');
        divFG.setAttribute('class', 'form-group');

        const label = document.createElement('label');
        label.innerText = `Ingrese el numero a guardar en el arreglo`;

        const input = document.createElement('input');
        input.setAttribute('class', 'form-control');
        input.setAttribute('type', 'number');
        input.setAttribute('id', `valorInut${i}`);

        row.appendChild(divCol);
        divCol.appendChild(divFG);
        divFG.appendChild(label);
        divFG.appendChild(input);
    }
    output.appendChild(row);

    const buttonResultados = document.createElement('button');
    buttonResultados.setAttribute('class', 'btn btn-outline-success btn-block mt-3');
    buttonResultados.setAttribute('id', 'btnResultado');
    buttonResultados.innerText = 'Llenar arrays';
    row.appendChild(buttonResultados);

    document.getElementById('btnResultado').addEventListener('click', GenerarArrays);
}

function GenerarArrays() {
    const NumeroInputs = document.getElementsByTagName('input');
    let arregloCompleto = [];
    for (let i = 0; i < NumeroInputs.length; i++) {
        arregloCompleto.push(NumeroInputs[i].value);
    }
    let array1 = [],
        array2 = [];
    array1 = arregloCompleto.splice(0, (arregloCompleto.length / 2));
    array2 = arregloCompleto.splice(0, (arregloCompleto.length));

    GenerarAlertas(array1, array2);
}

function GenerarAlertas(array1, array2) {
    let array3 = array1.concat(array2);
    EliminarElementos();

    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    const divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12');

    const div1 = document.createElement('div');
    div1.setAttribute('class', 'alert alert-success mt-3');
    div1.innerText = array1.toString();

    const div2 = document.createElement('div');
    div2.setAttribute('class', 'alert alert-success mt-3');
    div2.innerText = array2.toString();

    const div3 = document.createElement('div');
    div3.setAttribute('class', 'alert alert-success mt-3');
    div3.innerText = array3.toString();

    output.appendChild(row);
    row.appendChild(divCol);
    divCol.appendChild(div1);
    divCol.appendChild(div2);
    divCol.appendChild(div3);

}

function EliminarElementos() {
    while (output.firstChild) {
        output.firstChild.remove();
    }
}