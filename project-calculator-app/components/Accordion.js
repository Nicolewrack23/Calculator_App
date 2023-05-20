import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const equationListAccordion = ({ storedData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const arrayDataItems = storedData.map((course, index) => (
    <Text key={index} style={styles.textStyling}>
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
            <Text style={styles.textStyling}>History</Text>
            <Text style={styles.textStyling}>
              {isOpen ? (
                <AntDesign name="up" size={24} color="black" />
              ) : (
                <AntDesign name="down" size={24} color="black" />
              )}
            </Text>
          </View>
        </Pressable>
      </View>
      <View style={[styles.dropdown, isOpen ? styles.open : styles.closed]}>
        {arrayDataItems}
      </View>
    </View>
  );
};

export default equationListAccordion;
const styles = StyleSheet.create({
  accordionBox: {
    zIndex: 1,
    width: "95%",
    margin: 10,
    marginTop: 20,
    backgroundColor: "#BA9D9F",
    borderRadius: 5,
  },
  pressable: {
    padding: 15,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textStyling: {
    color: "#000",
    textAlign: "center",
    alignSelf: "center",
    fontSize: 24,
  },
  dropdown: {
    backgroundColor: "#BA9D9F",
    position: "absolute",
    top: 50,
    padding: 10,
    width: "100%",
    borderRadius: 5,
  },
  closed: {
    display: "none",
  },
  open: {
    display: "flex",
  },
});
