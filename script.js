document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.display p');
    const buttons = document.querySelectorAll('.buttons button');
    let currentInput = '0';
    let previousInput = '';
    let operator = null;
    let isOperatorClicked = false;
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.textContent;
  
        if (isOperatorClicked) {
          currentInput = value;
          isOperatorClicked = false;
        } else {
          currentInput = currentInput === '0' ? value : currentInput + value;
        }
  
        display.textContent = currentInput;
      });
    });
  
    document.querySelector('.clear').addEventListener('click', () => {
      currentInput = '0';
      previousInput = '';
      operator = null;
      display.textContent = currentInput;
    });
  
    document.querySelector('.equal').addEventListener('click', () => {
      if (operator && previousInput) {
        currentInput = calculate(parseFloat(previousInput), operator, parseFloat(currentInput));
        display.textContent = currentInput;
        previousInput = '';
        operator = null;
      }
    });
  
    document.querySelectorAll('.operator-btn').forEach(op => {
      op.addEventListener('click', () => {
        if (operator && previousInput) {
          currentInput = calculate(parseFloat(previousInput), operator, parseFloat(currentInput));
          display.textContent = currentInput;
        }
        operator = op.textContent;
        previousInput = currentInput;
        isOperatorClicked = true;
      });
    });
  
    function calculate(num1, operator, num2) {
      switch (operator) {
        case '/':
          return num1 / num2;
        case '*':
          return num1 * num2;
        case '-':
          return num1 - num2;
        case '+':
          return num1 + num2;
        default:
          return num2;
      }
    }
  });
  