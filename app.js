/* CALCULATOR VARIABLES */
let number1;
let number2;
let operator;

/* EVENT LISTENERS */
let display = document.querySelector('#display-text');



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
    }
}

//alert(operate(99, 6, "/"));

