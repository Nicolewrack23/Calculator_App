import { View, StyleSheet } from "react-native";
import Buttons from "./ButtonContainer";
import ShowCalculation from "./ShowCalculation";
import { useState } from "react";
import calculateResult from "./Calculate";

const Display = () => {
  const [buttons, setButtons] = useState("0");
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
    if (buttonValue) {
      calculateResult(buttonValue);
      // setButtons([...buttons, buttonValue]);
    }
  };

  return (
    <>
      <ShowCalculation buttonClicked={buttons} />
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
