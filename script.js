const calcDisplay = document.querySelector("#calculator__display-screen")
const numberKeys = document.querySelectorAll(".number")
const operatorKeys = document.querySelectorAll(".operator")
const equalsKey = document.querySelector("#equals")
const clearKey = document.querySelector("#clear")
const percentageKey = document.querySelector("#percentage")
const plusMinusKey = document.querySelector("#positive-or-negative")
const calcKeys = document.querySelectorAll(".calculator__keys")


// function for light-up display
calcKeys.forEach((calcKey) => {
  calcKey.addEventListener("click", () => {
    calcDisplay.classList.add("light-display")
  }) 
})

// variables that will be updated
let firstNum;
let secondNum;
let operator;

// function for the numbers and the decimal point
numberKeys.forEach((numberKey) => {
  numberKey.addEventListener("click", (event) => {
    if (calcDisplay.innerHTML==operator) {
      calcDisplay.innerHTML = "";
    }
    let digit = event.target.value;
    calcDisplay.innerHTML += digit;
  })
});

// function for the operators
operatorKeys.forEach((operatorKey) => {
  operatorKey.addEventListener("click", (event) => {
  operator = event.target.innerHTML;
  firstNum = calcDisplay.innerHTML;
  calcDisplay.innerHTML = operator;  
  })
})

// function for percentage
percentageKey.addEventListener("click", () => {
  let percentageValue = calcDisplay.innerHTML;
  calcDisplay.innerHTML = percentageValue / 100;
  if (percentageValue == false) {
    calcDisplay.innerHTML = "";
  }
})

// function for +/-
plusMinusKey.addEventListener("click", () => {
  let plusMinusValue = calcDisplay.innerHTML;
  calcDisplay.innerHTML = plusMinusValue * -1;
  if (plusMinusValue == false) {
    calcDisplay.innerHTML = "";
  }
})

// function for equals
equalsKey.addEventListener("click", ()  => {
 secondNum = calcDisplay.innerHTML;
 if (operator == "+") {
  calcDisplay.innerHTML = parseFloat(firstNum) + parseFloat(secondNum);
 } else if (operator == "-") {
  calcDisplay.innerHTML = parseFloat(firstNum) - parseFloat(secondNum);
 } else if (operator == "x") {
  calcDisplay.innerHTML = parseFloat(firstNum) * parseFloat(secondNum);
 } else if (operator == "/") {
  calcDisplay.innerHTML = parseFloat(firstNum) / parseFloat(secondNum);
  } 
  else if (secondNum) {
   calcDisplay.innerHTML = parseFloat(secondNum);
 } 
  else { 
    calcDisplay.innerHTML = "";
  }
}) 

// function for clear
clearKey.addEventListener("click", () => {
  calcDisplay.innerHTML = "";
  firstNum = "";
  secondNum = "";
  calcDisplay.classList.remove("light-display")
})
