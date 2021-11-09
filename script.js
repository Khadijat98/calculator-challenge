const calcDisplay = document.querySelector("#calculator__display-screen")
const numberKeys = document.querySelectorAll(".number")
const operatorKeys = document.querySelectorAll(".operator")
const equalsKey = document.querySelector("#equals")
const clearKey = document.querySelector("#clear")

numberKeys.forEach((numberKey) => {
  numberKey.addEventListener("click", (event) => {
    if (calcDisplay.innerHTML==operator) {
      calcDisplay.innerHTML = "";
    }
    let digit = event.target.value;
    calcDisplay.innerHTML += digit;
  })
});

let firstNum;
let secondNum;
let operator;

operatorKeys.forEach((operatorKey) => {
  operatorKey.addEventListener("click", (event) => {
  operator = event.target.innerHTML;
  firstNum = calcDisplay.innerHTML;
  calcDisplay.innerHTML = operator;  
  })
})

equalsKey.addEventListener("click", ()  => {
 secondNum = calcDisplay.innerHTML;
 if (operator == "+") {
  calcDisplay.innerHTML = Number(firstNum) + Number(secondNum);
 } else if (operator == "-") {
  calcDisplay.innerHTML = Number(firstNum) - Number(secondNum);
 } else if (operator == "x") {
  calcDisplay.innerHTML = Number(firstNum) * Number(secondNum);
 } else if (operator == "/") {
  calcDisplay.innerHTML = Number(firstNum) / Number(secondNum);
 } else {
   calcDisplay.innerHTML = "";
 }
}) 

clearKey.addEventListener("click", () => {
  calcDisplay.innerHTML = "";
})



