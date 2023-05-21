import { render, fireEvent } from "@testing-library/react-native";
import Accordion from "../components/Accordion";

describe("EquationListAccordion", () => {
  test("Pressing the pressable component", () => {
    const storedData = ["2 + 2", "3 * 4"];
    const { getByText, queryByText } = render(
      <Accordion storedData={storedData} />
    );

    expect(queryByText("2 + 2")).toBeNull();
    expect(queryByText("3 * 4")).toBeNull();

    fireEvent.press(getByText("History"));

    expect(queryByText("2 + 2")).toBeTruthy();
    expect(queryByText("3 * 4")).toBeTruthy();

    fireEvent.press(getByText("History"));

    expect(queryByText("2 + 2")).toBeNull();
    expect(queryByText("3 * 4")).toBeNull();
  });
});
