import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (equation) => {
  try {
    console.log("storage: " + equation);
    let storedEquations = await getData();

    if (!storedEquations) {
      storedEquations = [];
    }
    const updatingEquations = [...storedEquations, equation];

    const jsonValue = JSON.stringify(updatingEquations);
    await AsyncStorage.setItem("@stored_Equations", jsonValue);
  } catch (error) {
    console.log("Error storing data:", error);
  }
};
export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@stored_Equations");
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.log("Error getting data:", error);
  }
};
