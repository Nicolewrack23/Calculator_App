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
                <AntDesign name="up" size={24} color="#6FB4AD" />
              ) : (
                <AntDesign name="down" size={24} color="#6FB4AD" />
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
    marginTop: 35,
    borderRadius: 5,
  },
  pressable: {
    padding: 15,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#6FB4AD",
    borderBottomWidth: 4,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textStyling: {
    color: "#fff",
    textAlign: "center",
    alignSelf: "center",
    fontSize: 24,
  },
  dropdown: {
    backgroundColor: "#000",
    position: "absolute",
    top: 50,
    padding: 10,
    width: "100%",
    borderColor: "#6FB4AD",
    borderBottomWidth: 4,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  closed: {
    display: "none",
  },
  open: {
    display: "flex",
  },
});
