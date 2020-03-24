let array1 = [],
    array2 = [];
EventListener();

function EventListener() {
    document.getElementById('btnInit').addEventListener('click', InitApp);
}

function InitApp() {
    for (let i = 0; i < 10; i++) {
        array1[i] = i;
    }

    const output = document.getElementById('output');
    let alert = document.createElement('div');
    alert.setAttribute('class', 'alert alert-success');
    alert.innerText = array1.toString();
    array2 = array1.reverse();
    let alert2 = document.createElement('div');
    alert2.setAttribute('class', 'alert alert-success');
    alert2.innerText = array2.toString();
    output.appendChild(alert);
    output.appendChild(alert2);
    console.log(array1);

    console.log(array2);
}