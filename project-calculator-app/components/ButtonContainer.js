import { Pressable, Text, StyleSheet } from "react-native";

const buttons = ({ value, onButtonPress }) => {
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

  console.log("buttons " + value);
  return (
    <Pressable style={styles.buttons} onPress={onButtonPress}>
      <Text style={styles.value}>{value}</Text>
    </Pressable>
  );
};
export default buttons;

const styles = StyleSheet.create({
  buttons: {
    flexBasis: "32%",
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
  zeroButton: {
    flexGrow: 1,
    flexBasis: "50%",
  },
  zero: {
    color: "#000",
    fontSize: 30,
  },
});
