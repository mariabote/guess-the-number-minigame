'use strict';
// QUERY-SELECTOR

const buttonElement = document.querySelector(".js_button");
const inputElement = document.querySelector(".js_input");
const clueElement = document.querySelector(".js_pista");
const triesElement = document.querySelector(".js_intentos");

// VARIABLES DE DATOS GLOBALES

let randomNumber;
let triesNumber = 0;

// FUNCIONES (No modificar)

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
   
// FUNCIONES

// EVENTOS

buttonElement.addEventListener("click", (event)=>{
    let value = inputElement.value;
    if ( value < 1 || value > 100 ){
        clueElement.innerHTML = "El número debe estar entre 1 y 100";
    } else if ( value > randomNumber ) {
        clueElement.innerHTML = "Demasiado alto.";        
    } else if ( value < randomNumber ){
        clueElement.innerHTML = "Demasiado bajo.";  
    } else if ( value == randomNumber ){
        clueElement.innerHTML = "Has ganado campeona!!!";
    } 
    triesNumber = triesNumber + 1;
    triesElement.innerHTML = `Número de intentos ${triesNumber}.`;
});

// CÓDIGO CUANDO CARGA LA PÁGINA.

randomNumber=getRandomNumber(100);
console.log(`El valor es ${randomNumber}.`);