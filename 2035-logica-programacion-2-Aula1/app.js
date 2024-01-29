let numSecreto = 0;
let intentos = 0;
let numsSorteado = [];
let numMax = 3;

function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function reiniciar_input(params) {
    document.getElementById('numeroU').value='';

}

function generarNumeroSecreto(){
    numSecreto = Math.floor(Math.random()*10)+1;
    if (numsSorteado.length == numMax){
        alert("ya se han realizado todos los juegos");
    }else{
        console.log("x");
    }
    if (numsSorteado.includes(numSecreto)){
        generarNumeroSecreto();
    }else{
        numsSorteado.push(numSecreto);
        return numSecreto;
    }
}


generarNumeroSecreto();
console.log(numSecreto);
function verificarIntento(){
    let verificar = document.getElementById('numeroU').value;

    if (verificar == numSecreto) {
        asignarTextoElemento('p',`acertaste tu numero de intentos fue: ${intentos}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        asignarTextoElemento('p','fallaste');
        intentos++
        if (verificar > numSecreto) {
            asignarTextoElemento('p','el numero secreto es menor')
        }else{
            asignarTextoElemento('p', 'el numero secreto es mayor')
        }
            reiniciar_input();  

        
    }
}

function nuevoJuego() {
    generarNumeroSecreto()
    console.log(numSecreto);
    intentos=0;
    asignarTextoElemento('p','adivina el numero entre 0 y 10');
    reiniciar_input();
    document.getElementById('reiniciar').setAttribute('disabled','true');

}


asignarTextoElemento('h1','Juego del numero secreto');
asignarTextoElemento('p',`Selecciona un numero entre 1 a ${numMax}`);