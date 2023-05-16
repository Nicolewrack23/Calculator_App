let buttons = "";
let operator = null;
// let firstPeriod = false;
// let secondPeriod = false;
let firstNumber = "";
let secondNumber = "";
let result = "";
let firstOperand;
let secondOperand;

const calculateNumbers = (buttonValue) => {
  if (isOperator(buttonValue)) {
    if (operator || buttonValue === "=") {
      return;
    }
    // firstPeriod = false;
    firstNumber = buttons;
    operator = buttonValue;
  } else if (operator && !isOperator(buttonValue) && buttonValue !== "=") {
    // if (buttonValue === "." && secondPeriod) {
    //   return;
    // }
    // if (buttonValue === ".") {
    //   secondPeriod = true;
    // }
    secondNumber = secondNumber + buttonValue;
  }
  // if (buttonValue === "." && firstPeriod) {
  //   console.log("debug" + firstPeriod);
  //   return;
  // }
  // if (buttonValue === "." && !firstPeriod) {
  //   firstPeriod = true;
  // }

  if (buttonValue !== "=") {
    ShowCalculation();
    buttons = buttons + buttonValue;

    // console.log(buttons);
  } else {
    calculateResult();
    buttons = "";
    operator = null;
    firstNumber = null;
    secondNumber = "";
    // firstPeriod = false;
  }
};

const calculateResult = () => {
  switch (operator) {
    case "+":
      firstNumber = Number(firstNumber);
      secondNumber = Number(secondNumber);
      result = firstNumber + secondOperand;
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
const ShowCalculation = () => {
  console.log(`ShowCalculation ${firstNumber}${operator}${secondNumber}=`);
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
