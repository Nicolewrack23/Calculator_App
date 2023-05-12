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
        operator && styles.blueButton,
        value === "0" && styles.zeroButton,
        rightValue === "=" && styles.equalButton,
      ]}
      onPress={onButtonPress}
    >
      <Text style={styles.value}>{value || rightValue}</Text>
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
  blueButton: {
    backgroundColor: "blue",
  },
});
