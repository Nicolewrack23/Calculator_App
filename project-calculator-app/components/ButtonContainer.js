import { Pressable, Text, StyleSheet } from "react-native";

const buttons = ({ value, onButtonPress }) => {
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
    color: "#faf7f8",
    backgroundColor: "#2a2829",
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  value: {
    color: "#f4926a",
    fontSize: 30,
  },
});
