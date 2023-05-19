import { storeData, getData } from "../components/LocalStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";

jest.mock("@react-native-async-storage/async-storage");

describe("calculate the results", () => {
  test("Successful data storage", async () => {
    const equation = "2 + 2";
    const expectedStoredData = ["2 + 2"];

    AsyncStorage.setItem = jest.fn();

    await storeData(equation);

    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      "@storage_Key",
      JSON.stringify(expectedStoredData)
    );
  });
  test("Retrieving data successfully", async () => {
    const expectedData = ["2 + 2", "3 * 4"];

    AsyncStorage.getItem = jest
      .fn()
      .mockResolvedValue(JSON.stringify(expectedData));

    const result = await getData();

    expect(AsyncStorage.getItem).toHaveBeenCalledWith("@storage_Key");
    expect(result).toEqual(expectedData);
  });

  test("No data stored", async () => {
    const mockGetItem = jest.fn().mockResolvedValue(null);
    AsyncStorage.getItem = mockGetItem;

    const result = await getData();

    expect(mockGetItem).toHaveBeenCalledWith("@storage_Key");
    expect(result).toEqual([]);
  });
});
