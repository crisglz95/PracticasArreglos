let arreglo = [];
const output = document.getElementById('output');

function EventListener() {
    document.getElementById('buttonStart').addEventListener('click', ObtenerResultado);
    document.addEventListener('DOMContentLoaded', CargarInputs);
    document.getElementById('btnReiniciar').addEventListener('click', reiniciarApp);
}

EventListener();

function CargarInputs() {
    for (let x = 0; x < 10; x++) {
        const divFG = document.createElement('div');
        divFG.setAttribute('class', 'form-group');

        const labelFG = document.createElement('label');
        labelFG.innerText = `Dame el valor de la posicion ${x}`;

        const inputFC = document.createElement('input');
        inputFC.setAttribute('type', 'number');
        inputFC.setAttribute('placeholder', 'Ingresa el valor');
        inputFC.setAttribute('class', 'form-control');
        inputFC.setAttribute('id', `inpValor${x}`);

        output.appendChild(divFG);
        divFG.appendChild(labelFG);
        divFG.appendChild(inputFC);
    }
}

function ObtenerResultado() {
    for (let x = 0; x < 10; x++) {
        const valor = document.getElementById(`inpValor${x}`).value;
        if (valor != '') {
            arreglo[x] = valor;
        } else {
            arreglo[x] = '<span class="text-danger">No se ingreso numero</span>';
        }
    }

    MostrarValores();
}

function MostrarValores() {
    EliminarDom();
    const mostrarValoresUl = document.getElementById('mostrarArreglo');
    for (let x = 0; x < arreglo.length; x++) {
        const li = document.createElement('li');
        li.setAttribute('class', 'list-group-item');
        li.innerHTML = `<p>Index: ${x}</p> <p>Valor: ${arreglo[x]}</p>`;

        mostrarValoresUl.appendChild(li);
    }
}

function EliminarDom() {
    while (output.firstChild) {
        output.firstChild.remove();
    }
}

function reiniciarApp() {
    window.location.reload();
}