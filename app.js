/* CALCULATOR VARIABLES */
let number1 = "";
let number2 = "";
let operator = "";
let displayValue = "0";

const display = document.querySelector('#display-text');
const buttons = document.querySelectorAll('button');

function updateDisplay() {
    display.textContent = displayValue;
}

function inputNumber(number) {
    if (number === '.' && displayValue.includes('.')) return;

    if (displayValue === '0') {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function buttonClick(event) {
    const target = event.target;
    const classList = target.classList;
    if(target.tagName !== 'BUTTON') return;

    switch (true) {
        case classList.contains('number'):
            inputNumber(target.textContent);
            break;
    }
}

buttons.forEach(button => {
    button.addEventListener("click", buttonClick);
});



/* EVENT LISTENERS */
/* EVENT LISTENER FOR ALL BUTTONS 

const display = document.querySelector('#display-text');

const numberContainer = document.querySelectorAll('.number-container');
Array.from(numberContainer).forEach(button => 
    button.addEventListener("click", (event) => {
        number1 = event.target.textContent;
        display.textContent = number1;
        console.log(event.target);
    }));

const mathContainer = document.querySelectorAll('.math-container');
Array.from(mathContainer).forEach(button => 
    button.addEventListener("click", (event) => {
        operator = event.target.textContent;
        display.textContent = operator;
        console.log(event.target);
    }));


const display = document.querySelector('#display-text');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        value1 = event.target.textContent;
        display.textContent = value1;
    })
}) */


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
        case "&#43;":
            return add(parseFloat(num1), parseFloat(num2));
        case "&#8722;":
            return subtract(num1, num2);
        case "&times;":
            return multiply(num1, num2);
        case "&divide;":
            return divide(num1, num2);
        default:
            return alert("Error in calculation.");
    }
}

/*
console.log(operate(2,4,"&#43;"));
console.log(operate(2,4, "&#8722;"));
console.log(operate(2,4, "&times;"));
console.log(operate(2,4, "&divide;"));
*/

