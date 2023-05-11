import { View, Text, StyleSheet } from "react-native";
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
  console.log("display " + value);
  return (
    <>
      <View>
        <Buttons value={value[0]} onButtonPress={() => handleClick(0)} />
        <Buttons value={value[1]} onButtonPress={() => handleClick(1)} />
        <Buttons value={value[2]} onButtonPress={() => handleClick(2)} />
        <Buttons value={value[3]} onButtonPress={() => handleClick(3)} />
        <Buttons value={value[4]} onButtonPress={() => handleClick(4)} />
      </View>
      <View>
        <Buttons value={value[5]} onButtonPress={() => handleClick(5)} />
        <Buttons value={value[6]} onButtonPress={() => handleClick(6)} />
        <Buttons value={value[7]} onButtonPress={() => handleClick(7)} />
        <Buttons value={value[8]} onButtonPress={() => handleClick(8)} />
        <Buttons value={value[9]} onButtonPress={() => handleClick(9)} />
      </View>
      <View>
        <Buttons value={value[10]} onButtonPress={() => handleClick(10)} />
        <Buttons value={value[11]} onButtonPress={() => handleClick(11)} />
        <Buttons value={value[12]} onButtonPress={() => handleClick(12)} />
        <Buttons value={value[13]} onButtonPress={() => handleClick(13)} />
      </View>
    </>
  );
};
export default Display;
