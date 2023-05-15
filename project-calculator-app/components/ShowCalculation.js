import { Text, View, StyleSheet } from "react-native";

const ShowCalculation = ({ buttonClicked }) => {
  console.log(buttonClicked);

  return (
    <>
      <View style={styles.row1}>
        <Text style={styles.calculation}>{buttonClicked}</Text>
        <Text style={styles.working}>{buttonClicked}</Text>
      </View>
    </>
  );
};
export default ShowCalculation;

const styles = StyleSheet.create({
  row1: {
    justifyContent: "end",
    alignItems: "center",
    width: "100%",
  },
  calculation: {
    borderBottomColor: "#BA9D9F",
    borderBottomWidth: 3,
    paddingVertical: 10,
    width: "90%",
    fontSize: 32,
    textAlign: "right",
    color: "grey",
  },
  working: {
    paddingVertical: 10,
    width: "90%",
    fontSize: 64,
    textAlign: "right",
    color: "#fff",
  },
});
