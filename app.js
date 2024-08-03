/* CALCULATOR VARIABLES */
let number1;
let number2;
let operator;


/* FUNCTIONS */
function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide (a,b) {
    return a / b;
}

function operate (num1, num2, operator) {
    switch (operator) {
        case "+":
            add(num1, num2);
        case "-":
            subtract(num1, num2);
        case "*":
            multiple(num1, num2);
        case "/":
            divide(num1, num2);
    }
}

console.log(operate(1,2,"+"));
