let buttons = "";
let operator = null;
const calculateResult = (buttonValue) => {
  if (isOperator(buttonValue)) {
    if (operator) {
      return;
    }
    operator = buttonValue;
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

export default calculateResult;
