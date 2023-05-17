let result;
let equation;

const calculateResult = (firstOperand, operator, secondOperand) => {
  let firstNumber = Number(firstOperand);
  let secondNumber = Number(secondOperand);

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    return ["Error: Invalid input", "Error"];
  }
  switch (operator) {
    case "+":
      result = +(firstNumber + secondNumber).toFixed(2);
      equation = `${firstOperand}${operator}${secondOperand}=${result}`;
      return [equation, result];
    case "-":
      result = +(firstNumber - secondNumber).toFixed(2);
      equation = `${firstOperand}${operator}${secondOperand}=${result}`;
      return [equation, result];

    case "X":
      result = +(firstNumber * secondNumber).toFixed(2);
      equation = `${firstOperand}${operator}${secondOperand}=${result}`;
      return [equation, result];

    case "/":
      result = +(firstNumber / secondNumber).toFixed(2);
      if (result === Infinity) {
        return [`Not devisable by ${secondNumber}`, `Error`];
      } else {
        equation = `${firstOperand}${operator}${secondOperand}=${result}`;
        return [equation, result];
      }
    default:
      return ["Error: wrong operator", "Error"];
  }
};

export default calculateResult;
