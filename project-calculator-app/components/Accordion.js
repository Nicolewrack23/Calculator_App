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
      <View style={styles.dropdown}>{arrayDataItems}</View>
    </View>
  );
};

export default equationListAccordion;
const styles = StyleSheet.create({
  accordionBox: {
    width: "95%",
    margin: 10,
    backgroundColor: "#BA9D9F",
    borderRadius: 5,
  },
  pressable: {
    padding: 10,
    paddingHorizontal: 15,

    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  item: {
    color: "black",
    textAlign: "center",
  },
  dropdown: {
    backgroundColor: "#BA9D9F",
    position: "absolute",
    top: 30,
    zIndex: 1,
    padding: 10,
    width: "100%",
    borderRadius: 5,
  },
});
