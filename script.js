/* this file is skeleton code as I work towards figuring out how to create a working calculator */

// first lets figure out what global variables we are going to need
/**
 * First Operand
 * Second Operand
 * The selected Operation
 */

/**
 * these are the 3 key items we need to operate on
 */

let firstOperand = '';
let secondOperand = '';
let selectedOperation = null;

// Before connecting this to the html I just want to get started on how this will work programmatically 

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

/**
 * Technically the program is done now
 * we can run the 'operate' function within the console and it would work perfectly
 * That makes the next step connecting it to the actually html
 */

/* im gay */