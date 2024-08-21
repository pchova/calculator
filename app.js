/* CALCULATOR VARIABLES */
let number1 = "";
let number2 = "";
let operator = "";

/* EVENT LISTENERS */
const display = document.querySelector('#display-text');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        value1 = event.target.textContent;
        display.textContent = value1;
        console.log(value1);
    })
})


/* Attempt 2 
** displays any clicked button on the display! only one at a time

const display = document.querySelector('#display-text');


const numberContainer = document.querySelectorAll('.number-container');
Array.from(numberContainer).forEach(button => 
    button.addEventListener("click", showNumber));

const mathContainer = document.querySelectorAll('.math-container');
Array.from(mathContainer).forEach(button => 
    button.addEventListener("click", showNumber));


function showNumber(event) {
    const button = event.target;
    display.textContent = button.textContent;
} 
*/


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
