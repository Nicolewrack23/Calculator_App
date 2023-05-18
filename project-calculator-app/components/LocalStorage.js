import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (equation) => {
  try {
    const storedEquations = await getData();
    const UpdatingEquations = [...storedEquations, equation];
    console.log("storage:" + UpdatingEquations);
    const jsonValue = JSON.stringify(UpdatingEquations);
    await AsyncStorage.setItem("@storage_Key", jsonValue);
  } catch (e) {
    // saving error
  }
};
const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@storage_Key");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export default storeData;
