let buttons = "";
let operator = null;
let firstNumber = null;
let secondNumber = "";

const calculateNumbers = (buttonValue) => {
  if (isOperator(buttonValue)) {
    if (operator) {
      return;
    }
    firstNumber = buttons;
    operator = buttonValue;
    console.log("firstNumber: " + firstNumber);
  } else if (operator && !isOperator(buttonValue)) {
    secondNumber = secondNumber + buttonValue;
    console.log("secondNumber: " + secondNumber);
  }
  buttons = buttons + buttonValue;
  console.log(buttons);
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
