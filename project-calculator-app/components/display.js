import { View, StyleSheet } from "react-native";
import Buttons from "./ButtonContainer";

const Display = () => {
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
  return (
    <>
      <View style={styles.ButtonContainer}>
        {value.map((buttonValue) => (
          <Buttons
            key={buttonValue}
            value={buttonValue}
            onButtonPress={() => handleClick(buttonValue)}
          />
        ))}
      </View>
    </>
  );
};
export default Display;

const styles = StyleSheet.create({
  ButtonContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
