# JavaScript Calculator
**Made by Khadijat Oyeleye**

This is a calculator designed with HTML 5 and SCSS and made fully functional with JavaScript ES6.

This project was created on week 3 of the _nology course. The motivation behind this project was to apply the JavaScript concepts we were learning to a real project and to build problem solving skills - a requirement for any developer.

### Javascript Description

**Variables**

Three variables were created. One for the first number entered on the calculator (firstNum), one for the operator selected after entering this number (operator) and one for the second number entered (secondNum). These variables were defined with "let" as they needed to be updated.

**Functions**

Functions were created for the numbers (including the decimal point), operators, the percentage key, the +/- key, the equals key and the clear key. They all used the event listener "click" so they would run once the user clicked on the button. The calculator display was updated within these functions.

  **Number (0-9, .) Function**

  A new variable was created locally which was set to the value of the number key that was pressed and the calculator display was updated with the digits that were selected. If the operator was selected, the numbers did not show up on the display anymore.

  **Operator (+, -, x, /) Function**

  After the operator was selected, the first number that was selected was stored and the operator was shown on screen.

  **Percentage (%) Function**

  A new variable was created which was set to the number that was displayed on screen. Once the percentage button was clicked, the value on screen was given as a decimal value as the percentage operation was carried out through this click. If the user pressed the percentage button without selecting a number first (the decimal point is NOT considered to be a number here), nothing showed on screen. If any non-number button was pressed followed by the percentage key, NaN showed on screen, signifying an error.

  **Positive/Negative (+/-) Function**

  This worked similarly to the percentage function, the only difference is that the +/- operation was carried out, with the value on screen being turned into a negative number when the +/- button was clicked once then positive when the button wass clicked again.

  **Equals (=) Function**

  This stored the second number once the equals button was selected and carried out functions based on the conditions in the if/else if/else statement. For the operators, the required calculations were carried out giving the correct answers. If the equals sign was clicked straight after pressing a number, the same number showed up on screen. If anything else was clicked before clicking the equals sign, NaN showed on screen, again signifying an error.

  **Clear (AC) Function**

  This cleared the display as well as the memory of the calculator so new calculations could be carried out without building on previous ones.

  **Light-Up Display Function**

  This made it so that when the user pressed any key, with the exception of AC, the display lit up.

### Known Bugs
All known bugs have been resolved as of 29/11/21.

### Summary
Overall, I am very happy with what I managed to achieve with my first JavaScript project. The calculator is simple, with the user needing to press the equals button after performing an operation on two inputs before they can build on the calculation, but functional, with all buttons working as they should. I am also happy with the SCSS I implemented, as I wanted to create a calculator which resembled a graphical calculator. I am looking forward to further developing my knowledge of JavaScript so I can tackle more complex projects in the future. 
