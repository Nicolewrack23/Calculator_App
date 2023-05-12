import { Pressable, Text, StyleSheet } from "react-native";

const buttons = ({ value, rightValue, onButtonPress }) => {
  const secondaryButtons = ("/", "X", "+", "-");
  if (value === secondaryButtons || rightValue === secondaryButtons) {
    console.log("hello" + secondaryButtons);
    console.log("hello" + secondaryButtons);
  }
  if (value) {
    if (value === "0") {
      return (
        <Pressable
          style={[styles.buttons, styles.zeroButton]}
          onPress={onButtonPress}
        >
          <Text style={styles.zero}>{value}</Text>
        </Pressable>
      );
    }
    return (
      <Pressable style={styles.buttons} onPress={onButtonPress}>
        <Text style={styles.value}>{value}</Text>
      </Pressable>
    );
  }
  if (rightValue) {
    if (rightValue === "=") {
      return (
        <Pressable
          style={[styles.buttons, styles.equalButton]}
          onPress={onButtonPress}
        >
          <Text style={styles.value}>{rightValue}</Text>
        </Pressable>
      );
    }
    return (
      <Pressable style={styles.rightButtons} onPress={onButtonPress}>
        <Text style={styles.value}>{rightValue}</Text>
      </Pressable>
    );
  }
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
});
