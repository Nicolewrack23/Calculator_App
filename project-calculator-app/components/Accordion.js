import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";

const equationListAccordion = ({ storedData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const arrayDataItems = storedData.map((course, index) => (
    <Text key={index} style={styles.item}>
      {course}
    </Text>
  ));

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.accordionBox}>
      <View>
        <Pressable onPress={toggleAccordion}>
          <View style={styles.pressable}>
            <Text style={styles.item}>History</Text>
            <Text style={styles.item}>{isOpen ? "x" : "☰"}</Text>
          </View>
        </Pressable>
      </View>
      <View>{arrayDataItems}</View>
    </View>
  );
};

export default equationListAccordion;
const styles = StyleSheet.create({
  accordionBox: {
    width: "95%",
    margin: 10,
  },
  pressable: {
    backgroundColor: "blue",
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  item: {
    color: "white",
    textAlign: "",
  },
});
