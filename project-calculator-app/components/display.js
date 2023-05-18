import { View, StyleSheet } from "react-native";
import Buttons from "./ButtonContainer";
import ShowCalculation from "./ShowCalculation";
import { useState, useEffect } from "react";
import calculateResult from "./Calculate";
import { storeData, getData } from "./LocalStorage";

const Display = () => {
  const [operationDisplay, setOperationDisplay] = useState("");
  const [firstOperand, setFirstOperand] = useState("");
  const [secondOperand, setSecondOperand] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  const [firstPeriod, setFirstPeriod] = useState(false);
  const [secondPeriod, setSecondPeriod] = useState(false);
  const [equals, setEquals] = useState(false);
  const [history, setHistory] = useState("");
  const [lastNumber, setLastNumber] = useState("");

  const rightValues = ["X", "-", "+", "="];
  const value = [
    "AC",
    "C",
    "/",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    ".",
  ];

  const handleClick = (buttonValue) => {
    if (buttonValue === "AC" || buttonValue === "C") {
      handleSpecialButton(buttonValue);
    }
    if (isFirstOperand(buttonValue)) {
      if (
        buttonValue === "=" ||
        (buttonValue === "." && firstPeriod) ||
        buttonValue === "C" ||
        buttonValue === "AC"
      ) {
        return;
      } else {
        setFirstOperand((previousValue) => previousValue + buttonValue);
        if (buttonValue === "." && !firstPeriod) {
          setFirstPeriod(true);
        }
      }
    } else if (isSecondOperand(buttonValue)) {
      if (buttonValue === "=") {
        const equation = calculateResult(firstOperand, operator, secondOperand);
        setResult(equation[1]);
        setEquals(true);
        saveHistory(equation[0]);
        clearStates();
      } else if ((buttonValue === "." && secondPeriod) || buttonValue === "C") {
        return;
      } else {
        setSecondOperand((previousValue) => previousValue + buttonValue);
        if (buttonValue === "." && !secondPeriod) {
          setSecondPeriod(true);
        }
      }
    } else {
      setOperator(buttonValue);
    }
  };
  const handleSpecialButton = (buttonValue) => {
    if (buttonValue === "AC") {
      // Handle AC button
    } else if (buttonValue === "C") {
      if (isSecondOperand()) {
        if (secondOperand.length > 0) {
          if (lastNumber === ".") {
            setSecondPeriod(false);
          }
          setSecondOperand((previousValue) => previousValue.slice(0, -1));
        } else {
          setOperator("");
        }
      } else if (isFirstOperand()) {
        if (firstOperand.length > 0) {
          if (lastNumber === ".") {
            setFirstPeriod(false);
          }
          setFirstOperand((previousValue) => previousValue.slice(0, -1));
        } else {
          setHistory("");
          setOperationDisplay(" ");
        }
      } else if (isOperator()) {
        setOperator("");
      }
    }
  };

  const saveHistory = async (equation) => {
    console.log("hist" + equation);
    setHistory(equation);
    storeData(equation);
    const storedData = await getData();
    console.log("Retrieved data:", storedData);
  };

  const isFirstOperand = (buttonValue) => {
    return !operator && !isOperator(buttonValue);
  };

  const isSecondOperand = (buttonValue) => {
    return operator && !isOperator(buttonValue);
  };

  const isOperator = (buttonValue) => {
    return (
      buttonValue === "+" ||
      buttonValue === "-" ||
      buttonValue === "X" ||
      buttonValue === "/"
    );
  };

  const clearStates = () => {
    setFirstOperand("");
    setSecondOperand("");
    setOperator("");
    setFirstPeriod(false);
    setSecondPeriod(false);
  };

  useEffect(() => {
    let displayValue = " ";
    if (firstOperand.length > 0) {
      setLastNumber(firstOperand.slice(-1));
    }
    if (secondOperand.length > 0) {
      setLastNumber(secondOperand.slice(-1));
    }
    if (firstOperand) {
      displayValue = `${firstOperand}${operator}${secondOperand}`;
    } else if (equals) {
      displayValue = `${firstOperand}${operator}${secondOperand}=${result}`;
    }

    setOperationDisplay(displayValue);
  }, [firstOperand, operator, secondOperand, equals, result]);

  return (
    <>
      <ShowCalculation buttonClicked={operationDisplay} History={history} />
      <View style={styles.container}>
        <View style={styles.ButtonContainer}>
          {value.map((buttonValue) => (
            <Buttons
              key={buttonValue}
              value={buttonValue}
              onButtonPress={() => handleClick(buttonValue)}
            />
          ))}
        </View>
        <View style={styles.buttonRightContainer}>
          {rightValues.map((buttonRightValue) => (
            <Buttons
              key={buttonRightValue}
              rightValue={buttonRightValue}
              onButtonPress={() => handleClick(buttonRightValue)}
            />
          ))}
        </View>
      </View>
    </>
  );
};
export default Display;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  ButtonContainer: {
    display: "flex",
    flex: 2,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
  },
  buttonRightContainer: {
    display: "flex",
    width: "25%",
    flexDirection: "column",
    paddingRight: 10,
  },
});
