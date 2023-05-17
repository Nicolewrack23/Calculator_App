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
