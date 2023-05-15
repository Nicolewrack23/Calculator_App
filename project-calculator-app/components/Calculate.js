let buttons = "";
let operator = null;
let firstNumber = null;
let secondNumber = "";
let result = "";
let firstOperand;
let secondOperand;

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
  } else {
    calculateResult();
    buttons = "";
    operator = null;
    firstNumber = null;
    secondNumber = "";
  }
};

const calculateResult = () => {
  switch (operator) {
    case "+":
      firstOperand = Number(firstNumber);
      secondOperand = Number(secondNumber);
      result = firstOperand + secondOperand;
      console.log("Result: " + result);
      break;
    case "-":
      firstOperand = Number(firstNumber);
      secondOperand = Number(secondNumber);
      result = firstOperand - secondOperand;
      console.log("Result: " + result);
      break;
    case "X":
      firstOperand = Number(firstNumber);
      secondOperand = Number(secondNumber);
      result = firstOperand * secondOperand;
      console.log("Result: " + result);
      break;
    case "/":
      firstOperand = Number(firstNumber);
      secondOperand = Number(secondNumber);
      result = firstOperand / secondOperand;
      console.log("Result: " + result);
      break;
    default:
      console.log(`Sorry, wrong operator: ${operator}.`);
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
