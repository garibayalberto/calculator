
/* Math functions */
function add(num1 , num2) {
  return num1 + num2;
}
function subtract(num1 , num2) {
  return num1 - num2;
}
function multiply(num1 , num2) {
  return num1 * num2;
}
function divide(num1 , num2) {
  return num1 / num2;
}

function operate(operator , num1 , num2) {
  let result;

  if(operator == "+") {
    result = add(num1 , num2);
  }
  else if(operator == "-") {
    result = subtract(num1 , num2);
  }
  else if(operator == "*") {
    result = multiply(num1 , num2);
  }
  else if(operator == "/") {
    result = divide(num1 , num2);
  }

  return result;
}

let num1 = null;
let num2 = null;
let operator = null;
let display = document.getElementById("screen-output");

function updateDisplay(displayValue){
  display.innerHTML += displayValue;
}

// Set even listener on all the buttons and make the display change to that value
let buttons = document.getElementsByTagName("button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    if(this.className === "operator") {
      if(num2 == null){
        if(num1 == null){
          num1 = Number(display.innerHTML);
          operator = this.value;
        }
        else{
          num2 = Number(display.innerHTML);
        }
      }
      else{
        let result = operate(operator , num1 , num2);
        display.innerHTML = result;
      }
    }
    else if (this.className === "equal") {
      updateDisplay(this.value);
    }
    else if (this.id === "clear") {
      
    }
    else if (this.id === "clearAll") {
      
    }
    else{
      //num1 += this.value;
      updateDisplay(this.value);
    }
  });
}
