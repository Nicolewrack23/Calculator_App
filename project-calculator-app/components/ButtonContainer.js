import { Pressable, View, Text, Dimensions, StyleSheet } from "react-native";
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
      <View testID="Clear">
        <Feather name="arrow-left" size={40} color="#93E8E0" />
      </View>
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
    backgroundColor: "#969696",
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
    padding: 20,
  },
  leftButtons: {
    flexBasis: "31%",
  },
  value: {
    color: "#ffffff",
    fontSize: 30,
  },
  equalButton: {
    backgroundColor: "#00564d",
    flexGrow: 1,
  },
  zeroButton: {
    flexGrow: 1,
    flexBasis: "50%",
  },
  zero: {
    fontSize: 30,
  },
  allClearButton: {
    backgroundColor: "#363636",
    color: "#93E8E0",
  },
  backspaceButton: {
    backgroundColor: "#363636",
  },
  secondaryColor: {
    backgroundColor: "#00897b",
  },
  smallScreenPadding: {
    padding: 10,
  },
});
