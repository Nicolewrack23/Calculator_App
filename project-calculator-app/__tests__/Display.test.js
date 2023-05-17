import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Display from "../components/Display";

describe("Display component", () => {
  test("renders Game component without crashing", () => {
    render(<Display />);
  });
  test("should display the entered number", () => {
    const { getByText } = render(<Display />);
    fireEvent.press(getByText("2"));
    expect(getByText("3")).toBeTruthy();
  });
  test("should set the operator when an operator button is clicked", () => {
    const { getByText } = render(<Display />);
    fireEvent.press(getByText("+"));
    expect(getByText("+")).toBeTruthy();
  });
  test("should perform a calculation and display the result", () => {
    const { getByText } = render(<Display />);
    fireEvent.press(getByText("5"));
    fireEvent.press(getByText("+"));
    fireEvent.press(getByText("3"));
    fireEvent.press(getByText("="));
    expect(getByText("5+3=8")).toBeTruthy();
  });
  test("should perform a calculation on * not + operator", () => {
    const { getByText } = render(<Display />);
    fireEvent.press(getByText("5"));
    fireEvent.press(getByText("+"));
    fireEvent.press(getByText("3"));
    fireEvent.press(getByText("X"));
    fireEvent.press(getByText("="));
    expect(getByText("5X3=15")).toBeTruthy();
  });
  test("should handle division by zero", () => {
    const { getByText } = render(<Display />);
    fireEvent.press(getByText("8"));
    fireEvent.press(getByText("/"));
    fireEvent.press(getByText("0"));
    fireEvent.press(getByText("="));
    expect(getByText("Not devisable by 0")).toBeTruthy();
  });
  test("should not show first = in equation", () => {
    const { getByText } = render(<Display />);
    fireEvent.press(getByText("="));
    fireEvent.press(getByText("5"));
    fireEvent.press(getByText("+"));
    fireEvent.press(getByText("3"));
    fireEvent.press(getByText("="));
    expect(getByText("5+3=8")).toBeTruthy();
  });
  test("should not show first = in equation", () => {
    const { getByText } = render(<Display />);
    fireEvent.press(getByText("."));
    fireEvent.press(getByText("+"));
    fireEvent.press(getByText("9"));
    fireEvent.press(getByText("="));
    expect(getByText("Error: Invalid input")).toBeTruthy();
  });
});
describe("Clear button component", () => {
  test("Should remove the last entered character from the equation", () => {
    const { getByText } = render(<Display />);
    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("+"));
    fireEvent.press(getByText("9"));
    fireEvent.press(getByText("C"));
    fireEvent.press(getByText("8"));
    fireEvent.press(getByText("="));
    expect(getByText("1+8=9")).toBeTruthy();
  });
  test(`Should remove characters from the first operand and allow to reenter the "."`, () => {
    const { getByText } = render(<Display />);
    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("."));
    fireEvent.press(getByText("C"));
    fireEvent.press(getByText("9"));
    fireEvent.press(getByText("."));
    fireEvent.press(getByText("8"));
    expect(getByText("19.8")).toBeTruthy();
  });
  test(`Should remove characters from the second operand and allow to reenter the "."`, () => {
    const { getByText } = render(<Display />);
    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("+"));
    fireEvent.press(getByText("7"));
    fireEvent.press(getByText("."));
    fireEvent.press(getByText("C"));
    fireEvent.press(getByText("8"));
    fireEvent.press(getByText("."));
    fireEvent.press(getByText("8"));
    expect(getByText("1+78.8")).toBeTruthy();
  });
  test(`Should remove operator and allow to reenter at a different point`, () => {
    const { getByText } = render(<Display />);
    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("+"));
    fireEvent.press(getByText("C"));
    fireEvent.press(getByText("8"));
    fireEvent.press(getByText("+"));
    fireEvent.press(getByText("8"));
    expect(getByText("18+8")).toBeTruthy();
  });
  test(`Allow removing and reentering operators and changing operators after reentry.`, () => {
    const { getByText } = render(<Display />);
    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("+"));
    fireEvent.press(getByText("C"));
    fireEvent.press(getByText("8"));
    fireEvent.press(getByText("+"));
    fireEvent.press(getByText("8"));
    fireEvent.press(getByText("X"));
    expect(getByText("18X8")).toBeTruthy();
  });
  test("should clear the entire display area when the clear button is pressed after a calculation", () => {
    const { queryByText, getByText } = render(<Display />);
    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("+"));
    fireEvent.press(getByText("2"));
    fireEvent.press(getByText("="));
    expect(queryByText("1+2=3")).toBeTruthy();
    fireEvent.press(getByText("C"));
    expect(queryByText("1+2=3")).toBeNull();
  });
});
