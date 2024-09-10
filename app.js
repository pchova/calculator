/* CALCULATOR VARIABLES AND SELECTORS */
let number1 = "";
let number2 = "";
let operator = "";
let displayValue = "";
let isOperatorClicked = false;

const display = document.querySelector('#display-text');
const buttons = document.querySelectorAll('button');

/* updateDisplay() appends the str displayValue to display on the calculator screen */
function updateDisplay() {
    display.textContent = displayValue;
}

/* clearDisplay() re-initializes all variables and the display to be empty */
function clearDisplay() {
    display.textContent = "";
    displayValue = "";
    operator = "";
    number1 = "";
    number2 = "";
    isOperatorClicked = false;
}

/* inputNumber() accepts a number from a button clicked and adds it to displayValue.
** while boolean=false, num can only have one decimal
** while boolean=true, num is assigned to the var number1 and one more decimal can be added for the second num
** else add button clicked to displayValue string
*/
function inputNumber(number) {
    if (number === '.' && isOperatorClicked === false && displayValue.includes('.')) return; 

    if(isOperatorClicked === true) {
        let array = displayValue.split(operator);
        number1 = array[0];

        if (number === '.' && array[1].includes('.')) return;
    }

    if (displayValue === '') {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

/* getNumber2() runs after user clicks equal button; numbers inputted after operator in displayValue
** are assigned to var number2
*/
function getNumber2() {
    let arr = displayValue.split(operator);
    number2 = arr[1];
}

/* inputOperator() accepts a button click to assign a math operation to the variable operator
** Once operator is initialized, boolean=true
*/
function inputOperator(mathoperation) {
    if (operator !== "") return;

    if (operator === "") {
        operator = mathoperation;
        displayValue += mathoperation;
        isOperatorClicked = true;
    } 
    updateDisplay();
}

/* operate() runs when user clicks equals, and after getNumber2() runs */
function operate (num1, num2, operator) {
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

    if (String(displayValue).includes(".")) {
        displayValue = Math.trunc(displayValue * 100) / 100;
    }
    updateDisplay();
    /* operator gets set to empty str so the answer of the just
    computed equation is set to number1 unless user clicks 'AC'  */
    operator = "";
}

function subtract(a,b) {
    displayValue = (a - b);

    if (String(displayValue).includes(".")) {
        displayValue = Math.trunc(displayValue * 100) / 100;
    }
    updateDisplay();
    operator = "";
}

function multiply (a,b) {
    displayValue = (a * b);

    if (String(displayValue).includes(".")) {
        displayValue = Math.trunc(displayValue * 100) / 100;
    }
    updateDisplay();
    operator = "";
}

function divide (a,b) {
    if (b == 0 || (b.includes('0') && !b.includes('.'))) {
        clearDisplay();
        return alert("You cannot divide a number by 0. Please try your calculation again.");
    } else {
        displayValue = (a / b);
    }

    if (String(displayValue).includes(".")) {
        displayValue = Math.trunc(displayValue * 100) / 100;
    }
    updateDisplay();
    operator = "";
}

/* buttonClick() - an event handler that runs functions depending on 
** which class of buttons were clicked 
*/
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

/* Event Listener */
buttons.forEach(button => {
    button.addEventListener("click", buttonClick);
});

/* Keyboard Integration */
var unfocusedButtons = document.querySelectorAll('button');
unfocusedButtons.forEach(function (el) { el.setAttribute('tabindex', '-1'); });

document.addEventListener('keydown', function(event) {
    /*this prevents errors from the tabbing navigation when using 
    a combination of keyboard input and manual clicks*/
    event.preventDefault();

    const keyName = event.key;

    const numberKeys = 
        [
        '0', '1', '2', 
        '3', '4', '5', 
        '6', '7', '8', 
        '9', '0', '.'
        ]

    switch (keyName) {
        case numberKeys.find(key => key === keyName):
            inputNumber(keyName);
            console.log(keyName);
            break;
        case '+':
            inputOperator('+');
            break;
        case '-':
            inputOperator('−');
            break;
        case '*':
            inputOperator('×');
            break;
        case '/':
            inputOperator('÷');
            break;
        case 'Enter':
            getNumber2();
            operate(number1, number2, operator);
            break;
        case 'Escape':
            clearDisplay();
            break;
    }
});

