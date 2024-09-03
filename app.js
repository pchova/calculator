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

    if (displayValue === '0' ) {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();

    number1 = displayValue;
    console.log("number1 is " + number1);

    /*
    All we need to do is be able to assign number1 and number2 to store in a variable and then it will work!!
    
    May need to use a boolean flag to flag when operator has been chosen, then we can split the numbers accordingly
    Maybe when user hits equals, it actually calls another function to split the displayValue string into 3 variables
    and then calls operate()

    if displayValue.includes('x' || '&divide;' || '+' || '-') {
        number1 = number1.split(0, operator);
        number2 = number2.split(operator, -1);
        } 

    */
}

function inputOperator(mathoperation) {
    if (operator !== "") return;

    if (operator === "") {
        operator = mathoperation;
        displayValue += mathoperation;
        isOperatorClicked = true;
        console.log("mathoperation and boolean: " + operator + " " + isOperatorClicked);
    } 

    updateDisplay();
    //console.log("operator is " + operator);
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

