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

function clearDisplay() {
    display.textContent = "";
    displayValue = "0";
    operator = "";
    number1 = "";
    number2 = "";
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

function inputOperator(mathoperation) {
    if (operator !== "") return;

    if (operator === "") {
        operator = mathoperation;
        displayValue += mathoperation;
    } 

    updateDisplay();

    /*
    operator = mathoperation;
    displayValue += mathoperation;
    if (operator !== "") return;
    updateDisplay();
    */
}

function buttonClick(event) {
    const target = event.target;
    const classList = target.classList;
    if(target.tagName !== 'BUTTON') return;

    switch (true) {
        case classList.contains('number'):
            inputNumber(target.textContent);
            break;
        
        case classList.contains('mathoperation'):
            inputOperator(target.textContent);
            break;
        
        case classList.contains('equals'):
            operate(number1, number2, operator);
            break;
        
        case classList.contains('clear'):
            clearDisplay();
            break;
    }
}

buttons.forEach(button => {
    button.addEventListener("click", buttonClick);
});


/* MATH FUNCTIONS */
function add(a,b) {
    return (a + b).toFixed(3);
}

function subtract(a,b) {
    return (a - b).toFixed(3);
}

function multiply (a,b) {
    return (a * b).toFixed(3);
}

function divide (a,b) {
    return (a / b).toFixed(3);
}

function operate (num1, num2, operator) {
    switch (operator) {
        case "&#43;":
            displayValue.textContent = add(parseFloat(num1), parseFloat(num2));
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

