import { Pressable, Text, Dimensions, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
const { height } = Dimensions.get("window");

const Buttons = ({ value, rightValue, onButtonPress }) => {
  const operator =
    value === "/" ||
    rightValue === "+" ||
    rightValue === "-" ||
    rightValue === "X";

  let buttonContent = null;
  if (value === "C") {
    buttonContent = (
      <Feather testID="C" name="arrow-left" size={40} color="black" />
    );
  } else {
    buttonContent = (
      <Text style={[styles.value, value === "AC" && styles.allClearButton]}>
        {value || rightValue}
      </Text>
    );
  }

  return (
    <Pressable
      style={[
        value && [styles.buttons, styles.leftButtons],
        rightValue && styles.buttons,
        operator && styles.secondaryColor,
        value === "0" && styles.zeroButton,
        value === "AC" && styles.allClearButton,
        value === "C" && styles.backspaceButton,
        rightValue === "=" && styles.equalButton,
        height <= 620 && styles.smallScreenPadding,
      ]}
      onPress={onButtonPress}
    >
      {buttonContent}
    </Pressable>
  );
};
export default Buttons;

const styles = StyleSheet.create({
  buttons: {
    display: "flex",
    borderRadius: 20,
    backgroundColor: "#DBD8AE",
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
    padding: 20,
  },
  leftButtons: {
    flexBasis: "31%",
  },
  value: {
    color: "#000",
    fontSize: 30,
  },
  equalButton: {
    backgroundColor: "#BA9D9F",
    flexGrow: 1,
  },
  zeroButton: {
    flexGrow: 1,
    flexBasis: "50%",
  },
  zero: {
    color: "#000",
    fontSize: 30,
  },
  allClearButton: {
    backgroundColor: "#9E2A2B",
    color: "white",
  },
  backspaceButton: {
    backgroundColor: "#B6636E",
    color: "white",
  },
  secondaryColor: {
    backgroundColor: "#CA907E",
  },
  smallScreenPadding: {
    padding: 10,
  },
});
