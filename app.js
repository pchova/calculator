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
    if (number === '.' && isOperatorClicked === false && displayValue.includes('.')) return; 

    if (displayValue === '0') {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();

    if(isOperatorClicked === true) {
        let array = displayValue.split(operator);
        number1 = array[0];
    }
}

function getNumber2() {
    let arr = displayValue.split(operator);
    number2 = arr[1];
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
        case "+":
            add(parseFloat(num1), parseFloat(num2));
            break;
        case "−":
            subtract(num1, num2);
            break;
        case "×":
            multiply(num1, num2);
            break;
        case "÷":
            divide(num1, num2);
            break;
        default:
            return alert("Error in calculation.");
    }
}

/* MATH FUNCTIONS */
function add(a,b) {
    displayValue = (a + b);
    updateDisplay();

    //to perform an operation with the answer as number1
    operator = "";
}

function subtract(a,b) {
    displayValue = (a - b);
    updateDisplay();

    //to perform an operation with the answer as number1
    operator = "";
}

function multiply (a,b) {
    displayValue = (a * b);
    updateDisplay();

    //to perform an operation with the answer as number1
    operator = "";
}

function divide (a,b) {
    displayValue = (a / b);
    updateDisplay();

    //to perform an operation with the answer as number1
    operator = "";
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
            getNumber2();
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

