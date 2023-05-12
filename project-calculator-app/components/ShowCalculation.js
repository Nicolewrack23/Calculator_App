import { Text } from "react-native";

const ShowCalculation = ({ buttonClicked }) => {
  console.log(buttonClicked);

  return <Text>hello {buttonClicked}</Text>;
};
export default ShowCalculation;
