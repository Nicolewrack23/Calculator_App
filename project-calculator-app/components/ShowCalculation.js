import { Text, View } from "react-native";

const ShowCalculation = ({ buttonClicked }) => {
  console.log(buttonClicked);

  return (
    <View>
      <Text>hello {buttonClicked}</Text>
    </View>
  );
};
export default ShowCalculation;
