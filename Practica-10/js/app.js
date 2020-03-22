EventListener();

function EventListener() {
    document.getElementById('palabraIngresada').addEventListener('keypress', InitApp);
}

function InitApp() {
    if (event.key !== 'Enter') return;
    if (event.target.value == '') return;

    ReverseArray(event.target.value);
}

function ReverseArray(stringArray) {
    let arrayInicial = [];
    arrayInicial = stringArray.split('');
    let arrayReverse = arrayInicial.reverse().join('').toString();

    console.log(arrayReverse);

    const output = document.getElementById('output');
    const div = document.createElement('div');
    div.setAttribute('class', 'alert alert-success mt-3');
    div.innerText = arrayReverse;

    output.appendChild(div);

}