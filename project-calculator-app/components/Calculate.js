let buttons = "";
let operator = null;
let firstNumber = null;
let secondNumber = "";
let result = "";

const calculateNumbers = (buttonValue) => {
  if (isOperator(buttonValue)) {
    if (operator) {
      return;
    }
    firstNumber = buttons;
    operator = buttonValue;
    console.log("firstNumber: " + firstNumber);
  } else if (operator && !isOperator(buttonValue) && buttonValue !== "=") {
    secondNumber = secondNumber + buttonValue;
    console.log("secondNumber: " + secondNumber);
  }
  if (buttonValue !== "=") {
    buttons = buttons + buttonValue;
    console.log(buttons);
  } else {
    calculateResult();
  }
};

const calculateResult = () => {
  if (operator === "+") {
    const firstOperand = Number(firstNumber);
    const secondOperand = Number(secondNumber);
    result = firstOperand + secondOperand;
    console.log("Result: " + result);
  }
};

const isOperator = (buttonValue) => {
  return (
    buttonValue === "+" ||
    buttonValue === "-" ||
    buttonValue === "X" ||
    buttonValue === "/"
  );
};

export default calculateNumbers;
