// Operation Variables
let firstOperand = '';
let secondOperand = '';
let selectedOperation = null;
let shouldResetDisplay = false;
//--------------------

// HTML Variables
const display = document.getElementById('screen-output');

const equalsButton = document.getElementById('equalsBtn')
const clearButton = document.getElementById('clearBtn')
const deleteButton = document.getElementById('deleteBtn')
const pointButton = document.getElementById('pointBtn')

const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
//--------------------

// Button Click Events

// equalsButton.addEventListener('click', evaluate)
// clearButton.addEventListener('click', clear)
// deleteButton.addEventListener('click', deleteNumber)
// pointButton.addEventListener('click', appendPoint)


// Query All Number Buttons
numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
)

// Query All Operator Buttons
operatorButtons.forEach((button) =>
  button.addEventListener('click', () => setOperation(button.value))
)

//--------------------

// General functions

function resetDisplay() {
  display.textContent = ''
  shouldResetDisplay = false
}

function appendNumber(number) {
  if (display.textContent === '0' || shouldResetDisplay) {
    resetDisplay();
  }
  display.textContent += number;
}

function setOperation(operator) {
  if (selectedOperation !== null) evaluate();
  firstOperand = display.textContent;
  selectedOperation = operator;
  shouldResetDisplay = true;
}

function evaluate() {
  if (selectedOperation === null || shouldResetDisplay) return;
  if (selectedOperation === '/' && display.textContent === '0') {
    alert("You can't divide by 0!");
    return
  }
  secondOperand = display.textContent;
  display.textContent = operate(selectedOperation, firstOperand, secondOperand);

  selectedOperation = null
}
//--------------------

// Math Functionality

function add(a, b) {
  return a + b
}

function substract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function operate(operator, a, b) {
  a = Number(a)
  b = Number(b)
  switch (operator) {
    case '+':
      return add(a, b)
    case '-':
      return substract(a, b)
    case '*':
      return multiply(a, b)
    case '/':
      if (b === 0) return null
      else return divide(a, b)
    default:
      return null
  }
}
