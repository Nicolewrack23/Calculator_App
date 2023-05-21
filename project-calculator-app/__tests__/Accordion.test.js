import { render, fireEvent } from "@testing-library/react-native";
import Accordion from "../components/Accordion";

describe("EquationListAccordion", () => {
  test("Pressing the pressable component", () => {
    const storedData = ["2 + 2", "3 * 4"];
    const { getByText, queryByText } = render(
      <Accordion storedData={storedData} />
    );

    // Verify initial state
    expect(queryByText("2 + 2")).toBeNull();
    expect(queryByText("3 * 4")).toBeNull();

    // Press the pressable component
    fireEvent.press(getByText("History"));

    // Verify that the dropdown is open and displays the stored data
    expect(queryByText("2 + 2")).toBeTruthy();
    expect(queryByText("3 * 4")).toBeTruthy();

    // Press the pressable component again to close the dropdown
    fireEvent.press(getByText("History"));

    // Verify that the dropdown is closed
    expect(queryByText("2 + 2")).toBeNull();
    expect(queryByText("3 * 4")).toBeNull();

    // Your other test cases...
  });
});
