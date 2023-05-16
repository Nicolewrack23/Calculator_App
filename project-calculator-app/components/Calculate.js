let firstNumber;
let secondNumber;
let result;
let equation;

const calculateResult = (firstOperand, operator, secondOperand) => {
  console.log(`${firstOperand}${operator}${secondOperand}`);

  switch (operator) {
    case "+":
      firstNumber = Number(firstOperand);
      secondNumber = Number(secondOperand);
      result = firstNumber + secondNumber;
      equation = `${firstOperand}${operator}${secondOperand}=${result}`;
      console.log("Result calculate +: " + equation);
      return equation;
    case "-":
      firstNumber = Number(firstOperand);
      secondNumber = Number(secondOperand);
      result = firstNumber - secondNumber;
      equation = `${firstOperand}${operator}${secondOperand}=${result}`;
      console.log("Result calculate -: " + equation);
      return equation;

    case "X":
      firstNumber = Number(firstOperand);
      secondNumber = Number(secondOperand);
      result = firstNumber * secondNumber;
      equation = `${firstOperand}${operator}${secondOperand}=${result}`;
      console.log("Result calculate *: " + equation);
      return equation;

    case "/":
      firstNumber = Number(firstOperand);
      secondNumber = Number(secondOperand);
      result = firstNumber / secondNumber;
      equation = `${firstOperand}${operator}${secondOperand}=${result}`;
      console.log("Result calculate /: " + equation);
      return equation;
    default:
      console.log(`Sorry, wrong operator: ${operator}.`);
  }
};

export default calculateResult;
