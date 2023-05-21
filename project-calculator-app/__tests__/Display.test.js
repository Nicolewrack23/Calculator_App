import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import Display from "../components/DisplayAll";

describe("Display component", () => {
  test("should display the entered number", async () => {
    const { getByText } = render(<Display />);

    fireEvent.press(getByText("2"));
    fireEvent.press(getByText("3"));

    await waitFor(() => {
      expect(getByText("23")).toBeTruthy();
    });
  });
  test("should set the operator when an operator button is clicked", async () => {
    const { getByText } = render(<Display />);
    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("+"));
    await waitFor(() => {
      expect(getByText("1+")).toBeTruthy();
    });
  });
  test("should perform a calculation and display the result", async () => {
    const { getByText } = render(<Display />);
    fireEvent.press(getByText("5"));
    fireEvent.press(getByText("+"));
    fireEvent.press(getByText("3"));
    fireEvent.press(getByText("="));
    await waitFor(() => {
      expect(getByText("5+3=8")).toBeTruthy();
    });
  });
  test("should perform a calculation on * not + operator", async () => {
    const { getByText } = render(<Display />);
    fireEvent.press(getByText("5"));
    fireEvent.press(getByText("+"));
    fireEvent.press(getByText("3"));
    fireEvent.press(getByText("X"));
    fireEvent.press(getByText("="));
    await waitFor(() => {
      expect(getByText("5X3=15")).toBeTruthy();
    });
  });
  test("should handle division by zero", async () => {
    const { getByText } = render(<Display />);
    fireEvent.press(getByText("8"));
    fireEvent.press(getByText("/"));
    fireEvent.press(getByText("0"));
    fireEvent.press(getByText("="));
    await waitFor(() => {
      expect(getByText("Not devisable by 0")).toBeTruthy();
    });
  });
  test("should not show first = in equation", async () => {
    const { getByText } = render(<Display />);
    fireEvent.press(getByText("="));
    fireEvent.press(getByText("5"));
    fireEvent.press(getByText("+"));
    fireEvent.press(getByText("3"));
    fireEvent.press(getByText("="));
    await waitFor(() => {
      expect(getByText("5+3=8")).toBeTruthy();
    });
  });
  test(`should error if "." was only pressed without operand`, async () => {
    const { getByText } = render(<Display />);
    fireEvent.press(getByText("."));
    fireEvent.press(getByText("+"));
    fireEvent.press(getByText("9"));
    fireEvent.press(getByText("="));
    await waitFor(() => {
      expect(getByText("Error: Invalid input")).toBeTruthy();
    });
  });
});
describe("Clear button component", () => {
  test("Should remove the last entered character from the equation", async () => {
    const { getByText, getByTestId } = render(<Display />);
    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("+"));
    fireEvent.press(getByText("9"));
    fireEvent.press(getByTestId("Clear"));
    await waitFor(() => {
      expect(getByText("1+")).toBeTruthy();
    });
  });
  test(`Should remove characters from the first operand and allow to reenter the "."`, async () => {
    const { getByText, getByTestId } = render(<Display />);
    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("."));
    fireEvent.press(getByTestId("Clear"));
    fireEvent.press(getByText("9"));
    fireEvent.press(getByText("."));
    fireEvent.press(getByText("8"));
    await waitFor(() => {
      expect(getByText("19.8")).toBeTruthy();
    });
  });
  test(`Should remove characters from the second operand and allow to reenter the "."`, async () => {
    const { getByText, getByTestId } = render(<Display />);
    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("+"));
    fireEvent.press(getByText("7"));
    fireEvent.press(getByText("."));
    fireEvent.press(getByTestId("Clear"));
    fireEvent.press(getByText("8"));
    fireEvent.press(getByText("."));
    fireEvent.press(getByText("8"));
    await waitFor(() => {
      expect(getByText("1+78.8")).toBeTruthy();
    });
  });
  test(`Should remove operator and allow to reenter at a different point`, async () => {
    const { getByText, getByTestId } = render(<Display />);
    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("+"));
    fireEvent.press(getByTestId("Clear"));
    fireEvent.press(getByText("8"));
    fireEvent.press(getByText("+"));
    fireEvent.press(getByText("8"));
    await waitFor(() => {
      expect(getByText("18+8")).toBeTruthy();
    });
  });
});
test(`Allow removing and reentering operators and changing operators after reentry.`, async () => {
  const { getByText, getByTestId } = render(<Display />);
  fireEvent.press(getByText("1"));
  fireEvent.press(getByText("+"));
  fireEvent.press(getByTestId("Clear"));
  fireEvent.press(getByText("8"));
  fireEvent.press(getByText("+"));
  fireEvent.press(getByText("8"));
  fireEvent.press(getByText("X"));
  await waitFor(() => {
    expect(getByText("18X8")).toBeTruthy();
  });
});
test("should clear the entire display area when the clear button is pressed after a calculation", async () => {
  const { queryByText, getByText, getByTestId } = render(<Display />);
  fireEvent.press(getByText("1"));
  fireEvent.press(getByText("+"));
  fireEvent.press(getByText("2"));
  fireEvent.press(getByText("="));
  await waitFor(() => {
    expect(queryByText("1+2=3")).toBeTruthy();
  });
  fireEvent.press(getByTestId("Clear"));
  await waitFor(() => {
    expect(queryByText("1+2=3")).toBeNull();
  });
});
