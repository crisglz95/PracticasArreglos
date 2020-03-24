EventListener();

function EventListener() {
    document.getElementById('cadenaArray').addEventListener('keypress', InitApp);
}

function InitApp(event) {
    if (event.key !== 'Enter') return;
    if (event.target.value == '') return;

    EncriptString(event.target.value);
}

function EncriptString(palabraIngresada) {
    let arrayPalabra = palabraIngresada.split('');
    let arrayEncriptado = [];
    for (let i = 0; i < arrayPalabra.length; i++) {
        let encriptado = arrayPalabra[i].charCodeAt(0) + 3;
        let resultado = String.fromCharCode(encriptado);
        arrayEncriptado[i] = resultado;
    }
    let cadenaResultado = arrayEncriptado.join('').toString();

    const output = document.getElementById('output');
    const div = document.createElement('div');
    div.setAttribute('class', 'alert alert-success mt-3');
    div.innerText = `Cadena Encriptada: ${cadenaResultado}`;

    output.appendChild(div);
}