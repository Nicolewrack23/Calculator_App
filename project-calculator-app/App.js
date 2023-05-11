import { StyleSheet, View } from "react-native";
import Display from "./components/display";

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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
