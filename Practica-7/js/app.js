EventListener();

function EventListener() {
    document.getElementById('tamanoArray').addEventListener('keypress', InitApp);
}

function InitApp(event) {
    if (event.key !== 'Enter') return;
    if (event.target.value == '') return;
    if (isNaN(event.target.value)) return;
    if (event.target.value <= 0) return;

    GenerarElementos(event.target.value);
}

function GenerarElementos(tamanoArray) {
    const output = document.getElementById('output');

    for (let i = 0; i < tamanoArray; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'form-group');

        let label = document.createElement('label');
        label.innerText = `Palabra #${i + 1}`;

        let input = document.createElement('input');
        input.setAttribute('id', `inpPalabra${i}`);
        input.setAttribute('class', 'form-control');

        output.appendChild(div);
        div.appendChild(label);
        div.appendChild(input);
    }

    let button = document.createElement('button');
    button.setAttribute('id', 'btnEvaluar');
    button.setAttribute('class', 'btn btn-outline-success btn-block mt-3');
    button.innerText = 'Evaluar las palabras';

    let alert = document.createElement('div');
    alert.setAttribute('id', 'alertOriginal');
    alert.setAttribute('class', 'alert alert-success mt-3');

    let alert2 = document.createElement('div');
    alert2.setAttribute('id', 'alertEvaluado');
    alert2.setAttribute('class', 'alert alert-primary mt-3');

    output.appendChild(button);
    output.appendChild(alert);
    output.appendChild(alert2);

    document.getElementById('btnEvaluar').addEventListener('click', EvaluarPalabras);

}

function EvaluarPalabras() {
    let array = Number(document.getElementById('tamanoArray').value);
    let arrayCompleto = [];
    let arrayEvaluado = [];

    let aux = 0;

    for (let i = 0; i < array; i++) {
        let palabra = document.getElementById(`inpPalabra${i}`).value;
        palabra = palabra.toUpperCase();
        arrayCompleto[i] = palabra;
        if (palabra.charAt(0) == 'A' || palabra.charAt(0) == 'E' || palabra.charAt(0) == 'I' || palabra.charAt(0) == 'O' || palabra.charAt(0) == 'U') {
            arrayEvaluado[aux] = palabra;
            aux++;
        }
    }

    let original = document.getElementById('alertOriginal');
    original.innerText = arrayCompleto;
    let evaluado = document.getElementById('alertEvaluado');
    evaluado.innerText = arrayEvaluado;

    console.log(arrayCompleto);
    console.log(arrayEvaluado);
}