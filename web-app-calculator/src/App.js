import ButtonContainer from "./components/ButtonContainer";
import OperationDisplay from "./components/OperationDisplay";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [operationDisplay, setOperationDisplay] = useState("");
  const [firstOperand, setFirstOperand] = useState("");
  const [secondOperand, setSecondOperand] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  // The useState is only showing the array default not updating
  const [history, setHistory] = useState(["1 + 1 = 2", "2 * 2 = 4"]);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#DBD8AE",
      },
      secondary: {
        main: "#CA907E",
      },
      warning: {
        main: "#B6636E",
      },
      error: {
        main: "#9E2A2B",
      },
      info: {
        main: "#BA9D9F",
      },
    },
  });

  const buttonClicked = (char) => {
    if (isFirstOperand(char)) {
      /* having (previousValue + char) allows for the user to press the equals button 
      and make it apart of the first operand example: "1=2" + "33" = NaN.
       recommend adding an if statement to solve this issue */
      setFirstOperand((previousValue) => previousValue + char);
    } else if (isSecondOperand(char)) {
      if (char === "=") {
        calculateResult();
      } else {
        setSecondOperand((previousValue) => previousValue + char);
      }
    } else {
      setOperator(char);
    }
  };

  const isFirstOperand = (char) => {
    return !operator && !isOperator(char);
  };

  const isSecondOperand = (char) => {
    return operator && !isOperator(char);
  };

  const isOperator = (char) => {
    return char === "+" || char === "-" || char === "*" || char === "/";
  };

  // clearStates is empty and to avoid confusion it can be taken out
  const clearStates = () => {};

  const calculateResult = () => {
    setResult(Number(firstOperand) + Number(secondOperand));
    clearStates(); //To avoid confusion recommend taking it out.
  };

  useEffect(() => {
    setOperationDisplay(
      `${firstOperand} ${operator} ${secondOperand} = ${result}`
    );
  }, [result, firstOperand, secondOperand, operator]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ButtonContainer
          onButton={buttonClicked}
          //A need for a AddToHistory function for updating history after deletion as it only deletes the default data you have stored.
          onClear={() => setHistory([])}
        ></ButtonContainer>
        {/* d and h is not descriptive this could be changed to "display" and "history" */}
        <OperationDisplay d={operationDisplay} h={history}></OperationDisplay>
      </div>
    </ThemeProvider>
  );
}

export default App;
