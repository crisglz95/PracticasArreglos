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
    let arregloAleatorios = [];
    let arregloPares = [];

    for (let i = 0; i < tamanoArray; i++) {
        let numeroAleatorio = Math.floor(Math.random() * (1000 - 1)) + 1;
        arregloAleatorios.push(numeroAleatorio);
        if (numeroAleatorio % 2 == 0) {
            arregloPares.push(numeroAleatorio);
        }
    }

    MostrarValores(arregloAleatorios, arregloPares);
}

function MostrarValores(arregloAleatorio, arregloPares) {
    const output = document.getElementById('output');
    const div = document.createElement('div');
    div.setAttribute('class', 'alert alert-success mt-3');
    const div2 = document.createElement('div')
    div2.setAttribute('class', 'alert alert-primary mt-3');
    div.innerText = `El arreglo original es [${arregloAleatorio}]`;
    div2.innerText = `El arreglo de pares es [${arregloPares}]`;

    output.appendChild(div);
    output.appendChild(div2);
}