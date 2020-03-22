//.push() - Agrega elementos a la ultima posicion de un array
//.pop() - Elimina el ultimo elemento del array
//.unshift() - Agrega elemento a la primera posicion de un array
//shift() - Elimina el primer elemento de un array
//IndexOf() - Regresa un index y si no se encuentra lo buscado regresa -1
//Lenght - Regresa el tamaño del array
//.sort - Ordenar un array de menor a mayor
//reverse - Regresa el array de manera invertida
//splice - remplaza el elemento en una posicion
//Opcion 1: Tomar Array Principal y a cada index impar sustituir su valor por un 0
//Opcion 2: Eliminar el ultimo elemento del array
//Opcion 3: agregar elemento a la primera posicion
//Opcion 4: Elimina elemento de la primera posicion
//Opcion 5: Encontrar todos los elementoscon valor 10 y regresar en un array su posicion
//Opcion 6: Ordenar un array
//Opcion 7 Regresar el mismo array pero invertido
//Opcion 8 Cambiar todos los elementos valor 5 por 'cinco'

EventListener();

let array = [];
let outArray = [];

function EventListener() {
    document.getElementById('tamanoArray').addEventListener('keypress', getSize);
    document.addEventListener('click', ValidarClick);

}

function getSize(event) {
    if (event.key !== 'Enter') return;
    if (event.target.value == '') return;
    if (isNaN(event.target.value)) return;
    if (event.target.value <= 0) return;

    CreateArray(event.target.value);
    event.target.value = '';
}

function CreateArray(tamanoArray) {
    array = [];
    for (let i = 0; i < tamanoArray; i++) {
        array.push(Math.floor(Math.random() * (11 - 1)) + 1);
    }

    console.log(array);
}

function ValidarClick(event) {
    //Utiliza metodo push
    switch (event.target.id) {
        case 'op1':
            for (let i = 0; i < array.length; i++) {
                if ((i + 1) % 2 == 0) {
                    outArray.push(0);
                } else {
                    outArray.push(array[i]);
                }
            }
            console.log(outArray);
            break;
        case 'op2':
            array.pop();
            console.log(array);
            break;
        case 'op3':
            let random = Math.floor(Math.random() * (11 - 1) + 1);
            array.unshift(random);
            console.log(array);
            break;
        case 'op4':
            array.shift();
            console.log(array);
            break;
        case 'op5':
            let indices = [];
            let index = array.indexOf(10);
            while (index != -1) {
                indices.push(index);
                index = array.indexOf(10, index + 1);
            }
            console.log(indices);
            break;
        case 'op6':
            //Numeros - Mayusculas - Minusculas
            console.log(array.sort());
            break;
        case 'op7':
            console.log(array.reverse());
            break;
        case 'op8':
            for (let i = 0; i < array.length; i++) {
                if (array[i] == 5) {
                    array.splice(i, 1, 'Cinco');
                }
            }
            console.log(array);
            break;
        default:
            return;
    }
}