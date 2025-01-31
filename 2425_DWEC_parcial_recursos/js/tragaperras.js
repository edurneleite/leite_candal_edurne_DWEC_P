const frutas = [
    { index: 1, nombre: 'Cereza', simbolo: '🍒' },
    { index: 2, nombre: 'Limón', simbolo: '🍋' },
    { index: 3, nombre: 'Sandía', simbolo: '🍉' },
    { index: 4, nombre: 'Uva', simbolo: '🍇' },
    { index: 5, nombre: 'Plátano', simbolo: '🍌' }
];
var creditos = 10;

function jugar(){
    creditos -=1;
    indicesFrutas = generarTresNumerosAleatorios();
    //Actualizar slots segun numeros aleatorios
    let rueda1 = document.getElementById('slot1');
    rueda1.textContent = frutas[num1]['simbolo'];
    let rueda2 = document.getElementById('slot2');
    rueda2.textContent = frutas[num2]['simbolo'];
    let rueda3 = document.getElementById('slot3');
    rueda3.textContent = frutas[num3]['simbolo'];
    //Comoprobar si gana creditos
    if (num1 == num2 && num2 == num3){
        creditos += 3;
    } else if (num1 == num2 || num2 == num3 || num1 == num3){
        creditos += 1;
    }
    //Comprobar si son 3 cerezas
    if (num1 == 0 && num2 == 0  && num3 == 0 ){
        alert('Has ganado el juego');
        window.open('../index.html');
    }
    //Actualizar mensaje de creditos
    let mensajeCreditos = document.getElementById('credits-value');
    mensajeCreditos.textContent = creditos;
    //Verificar que le quedna creditos
    if (creditos == 0){
        alert('No te queda credito');
        window.open('../index.html');
    }
}

function generarTresNumerosAleatorios() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    //numero 1
    num1 = getRandomInt(5); 
    //numero 2
    num2 = getRandomInt(5); 
    //numero 3
    num3 = getRandomInt(5); 
    //console.log(num1, num2, num3);
    return null;
}


