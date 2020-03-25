EventListener();

function EventListener() {
    document.getElementById('tamanoArray').addEventListener('keypress', InitApp);
}

function InitApp(event) {
    if (event.key !== 'Enter') return;
    if (event.key.value == '') return;
    if (isNaN(event.target.value)) return;
    if (event.target.value <= 0) return;

    FillArray(event.target.value);
}

function FillArray(tamanoArray) {
    let arrayA = [],
        arrayB = [],
        arrayC = [];
    for (let i = 0; i < tamanoArray; i++) {
        let numRandom1 = Math.floor(Math.random() * (1000 - 1) + 1);
        arrayA.push(numRandom1);
        numRandom1 = Math.floor(Math.random() * (1000 - 1) + 1);
        arrayB.push(numRandom1);
        arrayC[i] = arrayA[i].toString() + arrayB[i].toString();
    }

    arrayC = arrayC.sort().reverse();

    MostrarArreglos(arrayA, arrayB, arrayC);
}

function MostrarArreglos(arrayA, arrayB, arrayC) {
    const output = document.getElementById('output');

    const divA = document.createElement('div');
    divA.setAttribute('class', 'alert alert-success mt-3');
    divA.innerHTML = `<div class="text-break">${arrayA}</div>`;

    const divB = document.createElement('div');
    divB.setAttribute('class', 'alert alert-success mt-3');
    divB.innerHTML = `<div class="text-break">${arrayB}</div>`;

    const divC = document.createElement('div');
    divC.setAttribute('class', 'alert alert-success mt-3');
    divC.innerHTML = `<div class="text-break">${arrayC}</div>`;

    output.appendChild(divA);
    output.appendChild(divB);
    output.appendChild(divC);
}