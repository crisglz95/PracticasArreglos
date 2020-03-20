EventListener();

let arregloNumerosPrimosGlobal = [];

function FillArrayGlobal() {
    for (let i = 0; i <= 1000; i++) {
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
    document.getElementById('btnInit').addEventListener('click', CreateContent);
}

function CreateContent() {
    let arrayDescendente = arregloNumerosPrimosGlobal.reverse();

    const listGroup = document.getElementById('listaArreglo');

    for (let i = 0; i < arrayDescendente.length; i++) {
        const li = document.createElement('li');
        li.setAttribute('class', 'list-group-item');
        li.innerText = arrayDescendente[i];
        listGroup.appendChild(li);
    }

}