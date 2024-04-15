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
function giveClue(clue) {
    clueElement.innerHTML=clue;

}
function increaseTries() {
    triesNumber = triesNumber + 1;
    triesElement.innerHTML=`${triesNumber} attempts`;
    
}
// EVENTOS

buttonElement.addEventListener("click", (event)=>{
    let value = parseInt (inputElement.value);
    if ( value < 1 || value > 100 ){
        giveClue("Between 1 and 100") ;
    } else if ( value > randomNumber ) {
        giveClue("Too high");        
    } else if ( value < randomNumber ){
        giveClue("Too low");  
    } else if ( value === randomNumber ){
        giveClue("You won!");
    } 
    increaseTries();
});

// CÓDIGO CUANDO CARGA LA PÁGINA.

randomNumber=getRandomNumber(100);
console.log(`Number is ${randomNumber}. Cheater! ;)`);