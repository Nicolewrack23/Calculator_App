import { View, Text, StyleSheet } from "react-native";
import { getData } from "./LocalStorage";

const equationListAccordion = ({ storedData }) => {
  const arrayDataItems = storedData.map((course, index) => (
    <Text key={index} style={styles.item}>
      {course}
    </Text>
  ));

  return (
    <View>
      <View>
        <Text style={styles.item}>Render List/Array of Items</Text>
      </View>
      <View>{arrayDataItems}</View>
    </View>
  );
};

export default equationListAccordion;
const styles = StyleSheet.create({ item: { color: "white" } });
