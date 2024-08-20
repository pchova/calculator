/* CALCULATOR VARIABLES */
let number1 = "";
let number2 = "";
let operator = "";

/* EVENT LISTENERS */
const display = document.querySelector('#display-text');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        display.textContent = event.target.textContent;
    })
})






/* Attempt 2 
** displays any clicked button on the display! only one at a time

const display = document.querySelector('#display-text');
const numberContainer = document.querySelectorAll('.number-container');
const mathContainer = document.querySelectorAll('.math-container');

Array.from(numberContainer).forEach(button => 
    button.addEventListener("click", showNumber));

Array.from(mathContainer).forEach(button => 
    button.addEventListener("click", showNumber));

function showNumber(event) {
    const button = event.target;
    display.textContent = button.textContent;
} 
*/


/* Attempt 1 
const numberContainer = document.querySelectorAll('.number-container');
numberContainer.forEach(button => button.addEventListener('click', logText));

const mathContainer = document.querySelectorAll('.math-container');
mathContainer.forEach(button => button.addEventListener('click', logText)); */


/* FUNCTIONS */
function add(a,b) {
    return (a + b).toFixed(4);
}

function subtract(a,b) {
    return (a - b).toFixed(4);
}

function multiply (a,b) {
    return (a * b).toFixed(4);
}

function divide (a,b) {
    return (a / b).toFixed(4);
}

function operate (num1, num2, operator) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return alert("Error in calculation.");
    }
}
