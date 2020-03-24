const output = document.getElementById('output');
EventListener();

function EventListener() {
    document.getElementById('tamanoArray').addEventListener('keypress', InitApp);
    document.getElementById('btnReiniciar').addEventListener('click', ReiniciarApp);
}

function InitApp(event) {
    if (event.key !== 'Enter') return;
    if (event.target.value == '') return;
    if (isNaN(event.target.value)) return;
    if (event.target.value <= 0 || event.target.value > 1000) return;

    MostrarInputs(event.target.value);
}

function MostrarInputs(tamano) {
    EliminarElementos();

    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    for (let i = 0; i < tamano; i++) {
        const divCol = document.createElement('div');
        divCol.setAttribute('class', 'col-12');

        const divFG = document.createElement('div');
        divFG.setAttribute('class', 'form-group');

        const label = document.createElement('label');
        label.innerText = `Ingrese el elemento a guardar en el arreglo`;

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

    const buttonResultados = document.createElement('button');
    buttonResultados.setAttribute('class', 'btn btn-outline-success btn-block');
    buttonResultados.setAttribute('id', 'btnCalcularResultado');
    buttonResultados.innerText = 'Calcular Operaciones';
    row.appendChild(buttonResultados);

    document.getElementById('btnCalcularResultado').addEventListener('click', RealizarCalculos);
}

function EliminarElementos() {
    while (output.firstChild) {
        output.firstChild.remove();
    }
}

function ReiniciarApp() {
    window.location.reload();
}

function RealizarCalculos() {
    let inputs = document.getElementsByTagName('input');
    let arrayLleno = [];
    for (let i = 0; i < inputs.length; i++) {
        arrayLleno.push(Number(inputs[i].value));
    }

    let media = Media(arrayLleno);
    let mediana = Mediana(arrayLleno);
    let moda = Moda(arrayLleno);

}

function Media(arrayLleno) {
    let media = 0;

    for (let i = 0; i < arrayLleno.length; i++) {
        media += arrayLleno[i];
    }

    media = media / arrayLleno.length;

    return media;
}

function Mediana(arrayLleno) {
    let mediana = 0,
        posicion = 0;
    let arrayOrdenado = [];

    arrayOrdenado = arrayLleno.sort();
    if (arrayOrdenado.length % 2 == 0) {
        posicion = Math.floor(arrayOrdenado.length / 2);
        mediana = (arrayOrdenado[posicion] + arrayOrdenado[posicion - 1]) / 2;
    } else {
        posicion = Math.floor(arrayOrdenado.length / 2);
        mediana = arrayOrdenado[posicion];
    }

    return mediana;

}

function Moda(arrayLleno) {
    let arrayComp = [],
        arrayDatos = [];
    arrayComp = new Set(arrayLleno);
    arrayComp = Array.from(arrayComp);
    for (let i = 0; i < arrayComp.length; i++) {
        let moda = 1;
        for (let j = 0; j < arrayLleno.length; j++) {
            if (arrayComp[i] == arrayLleno[j]) {
                arrayDatos[i] = moda;
                moda++;
            }
        }
    }
    console.log(arrayDatos);
    console.log(arrayComp);
    return arrayComp;
}