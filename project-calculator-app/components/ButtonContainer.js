import { Pressable, Text, StyleSheet } from "react-native";

const buttons = ({ value, onButtonPress }) => {
  if (value === "0") {
    console.log("zero " + value);
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
    color: "#faf7f8",
    borderRadius: 20,
    backgroundColor: "#2a2829",
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
    padding: 20,
  },
  value: {
    color: "#f4926a",
    fontSize: 30,
  },
  zeroButton: {
    flexGrow: 1,
    flexBasis: "50%",
  },
  zero: {
    color: "#eb4034",
    fontSize: 30,
  },
});
