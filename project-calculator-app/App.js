import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Buttons from "./components/ButtonContainer";

export default function App() {
  return (
    <View style={styles.container}>
      <Buttons />
      <Text>Open up App.js to start working on your app! hello</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
