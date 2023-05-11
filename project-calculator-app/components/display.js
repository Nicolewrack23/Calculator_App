import { View } from "react-native";
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
      <View style>
        {value.map((buttonValue) => (
          <Buttons
            key={buttonValue}
            value={buttonValue}
            onButtonPress={() => handleClick(buttonValue)}
          />
        ))}
      </View>
    </>
  );
};
export default Display;
