import { StyleSheet, View } from "react-native";
import Display from "./components/DisplayAll";

export default function App() {
  return (
    <View style={styles.container}>
      <Display />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
