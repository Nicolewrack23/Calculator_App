import { Pressable, Text, StyleSheet } from "react-native";

const buttons = ({ value, rightValue, onButtonPress }) => {
  const operator =
    value === "/" ||
    rightValue === "+" ||
    rightValue === "-" ||
    rightValue === "X";

  return (
    <Pressable
      style={[
        value && styles.buttons,
        rightValue && styles.rightButtons,
        operator && styles.secondaryColor,
        value === "0" && styles.zeroButton,
        value === "AC" && styles.allClearButton,
        value === "C" && styles.backspaceButton,
        rightValue === "=" && styles.equalButton,
      ]}
      onPress={onButtonPress}
    >
      <Text
        style={[
          styles.value,
          value === "AC" && styles.allClearButton,
          value === "C" && styles.backspaceButton,
        ]}
      >
        {value || rightValue}
      </Text>
    </Pressable>
  );
};
export default buttons;

const styles = StyleSheet.create({
  buttons: {
    flexBasis: "31%",
    display: "flex",
    borderRadius: 20,
    backgroundColor: "#DBD8AE",
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
    padding: 20,
  },
  rightButtons: {
    display: "flex",
    borderRadius: 20,
    backgroundColor: "#DBD8AE",
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
    padding: 20,
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
});
