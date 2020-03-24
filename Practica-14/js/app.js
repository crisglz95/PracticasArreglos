EventListener();

function EventListener() {
    document.getElementById('btnInit').addEventListener('click', InitApp);
}

function InitApp() {
    let arrayRandom = [];
    let arrayImpar = [];

    for (let i = 0; i < 30; i++) {
        let numeroAleatorio = (Math.floor(Math.random() * (301 - 100)) + 100);
        arrayRandom.push(numeroAleatorio);
        if (numeroAleatorio % 2 !== 0) arrayImpar.push(numeroAleatorio);
    }

    GeneraDOM(arrayImpar, arrayRandom);
}

function GeneraDOM(arrayImpar, arrayRandom) {
    const output = document.getElementById('output');
    const divRandom = document.createElement('div');
    divRandom.setAttribute('class', 'alert alert-success');
    divRandom.innerHTML = `<div class='text-break'>${arrayRandom.toString()}</div>`;

    const divImpares = document.createElement('div');
    divImpares.setAttribute('class', 'alert alert-primary');
    divImpares.innerHTML = `<div class='text-break'>${arrayImpar.toString()}</div>`

    output.appendChild(divRandom);
    output.appendChild(divImpares);
}