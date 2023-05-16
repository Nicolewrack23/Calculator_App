let firstNumber;
let secondNumber;
let result;
let equation;

const calculateResult = (firstOperand, operator, secondOperand) => {
  switch (operator) {
    case "+":
      firstNumber = Number(firstOperand);
      secondNumber = Number(secondOperand);
      result = +(firstNumber + secondNumber).toFixed(2);
      equation = `${firstOperand}${operator}${secondOperand}=${result}`;
      console.log("Result calculate +: " + equation);
      return [equation, result];
    case "-":
      firstNumber = Number(firstOperand);
      secondNumber = Number(secondOperand);
      result = +(firstNumber - secondNumber).toFixed(2);
      equation = `${firstOperand}${operator}${secondOperand}=${result}`;
      console.log("Result calculate -: " + equation);
      return [equation, result];

    case "X":
      firstNumber = Number(firstOperand);
      secondNumber = Number(secondOperand);
      result = +(firstNumber * secondNumber).toFixed(2);
      equation = `${firstOperand}${operator}${secondOperand}=${result}`;
      console.log("Result calculate *: " + equation);
      return [equation, result];

    case "/":
      firstNumber = Number(firstOperand);
      secondNumber = Number(secondOperand);
      result = +(firstNumber / secondNumber).toFixed(2);
      equation = `${firstOperand}${operator}${secondOperand}=${result}`;
      console.log("Result calculate /: " + equation);
      return [equation, result];
    default:
      console.log(`Sorry, wrong operator: ${operator}.`);
  }
};

export default calculateResult;
