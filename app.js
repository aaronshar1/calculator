const display = document.querySelector("#display");
const displayButtons = document.querySelectorAll(".display");
const buttons = document.querySelectorAll("button");
const clear = document.querySelector("#clear")

const operators = ["+", "-", "*", "/"];
let numOne = "";
let numTwo = "";
let operator = "";
let displayValue = "";

// add event listeners
displayButtons.forEach(button => {
    button.addEventListener('click', (e) => isValidOperation(e.target.value))
})
clear.addEventListener('click', e => restart())

// update display fuinctions
function restart(message="0"){
    displayValue = "";
    numOne = "";
    numTwo = "";
    operator = "";
    display.innerText = message;
}

function updateDisplay(message){
    display.innerText = message;
}

function clearDisplay(){
    display.innerText = "";
    displayValue = "";
}

function errorMessage(){
    restart("Not a valid operation or input");
}

function isValidOperation(value){
    if (value === "=") {
        if (numOne.length === 0 || numTwo.length === 0 || operator.length === 0){
            errorMessage();
            return
        };
    };
    if (operators.includes(value)){
        if (operator.length === 0 && numOne.length === 0){
            errorMessage();
            return
        } else if (operator.length === 1 && numTwo.length === 0){
            errorMessage();
            return
        } 
    } 
    if (operator === "/" && numTwo === "0"){
        errorMessage();
        return
    }
    parse(value)
}

function displayAnswer(value=""){
    numOne = operate(operator, numOne, numTwo).toString()
    numTwo = "";
    displayValue = numOne + value;
    updateDisplay(displayValue);
}

function parse(value){
    if (value === "=") {
        if (numOne.length > 0 && numTwo.length > 0 && operator.length > 0){
            // numOne = operate(operator, numOne, numTwo).toString()
            // numTwo = "";
            // displayValue = numOne + value;
            // updateDisplay(displayValue);
            displayAnswer()
            operator = ""
        } 
    }else if (operators.includes(value)){
        if (operator.length === 0){
            displayValue += value
            updateDisplay(displayValue)
        } else {
            // numOne = operate(operator, numOne, numTwo).toString();
            // numTwo = "";
            // displayValue = numOne + value;
            // updateDisplay(displayValue);
            displayAnswer(value)
        }
        operator = value
    } else {
        if (operator.length === 0){
            numOne += value;
        } else {
            numTwo += value;
        }
        displayValue += value
        updateDisplay(displayValue)
    }  
}

function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function operate(op, x, y){
    if (op == "+"){
        return add(Number(x), Number(y));
    } else if (op == "-"){
        return subtract(Number(x), Number(y));
    } else if (op == "*"){
        return multiply(Number(x), Number(y));
    } else if (op == "/"){
        return divide(Number(x), Number(y));
    } else {
        return False;
    }
}

