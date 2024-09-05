/* CALCULATOR VARIABLES */
let number1 = "";
let number2 = "";
let operator = "";
let displayValue = "0";
let isOperatorClicked = false;

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
    isOperatorClicked = false;
}

function inputNumber(number) {
    if (number === '.' && displayValue.includes('.')) return; 

    if (displayValue === '0') {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();

    if(isOperatorClicked === true) {
        array = displayValue.split(operator);
        number1 = array[0];
    }
}


function inputOperator(mathoperation) {
    if (operator !== "") return;

    if (operator === "") {
        operator = mathoperation;
        displayValue += mathoperation;
        isOperatorClicked = true;
    } 
    updateDisplay();
}

function operate (num1, num2, operator) {
    console.log("number1 = " + number1);
    console.log("number2 = " + number2);
    console.log("operator = " + operator);

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

