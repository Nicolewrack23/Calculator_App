import calculateResult from "../components/Calculate";

describe("calculate the results", () => {
  test.each`
    firstOperand | operator | secondOperand | expected
    ${"1"}       | ${"+"}   | ${"2"}        | ${3}
    ${"12"}      | ${"+"}   | ${"24"}       | ${36}
    ${"1.1"}     | ${"+"}   | ${"2.2"}      | ${3.3}
    ${"9.54"}    | ${"+"}   | ${"6.45"}     | ${15.99}
    ${"1.132"}   | ${"+"}   | ${"2.2"}      | ${3.33}
    ${"9.54.5"}  | ${"+"}   | ${"7.456"}    | ${"Error"}
  `(
    "If $firstOperand $operator $secondOperand should return $expected",
    ({ firstOperand, operator, secondOperand, expected }) => {
      const result = calculateResult(firstOperand, operator, secondOperand);
      expect(result[1]).toBe(expected);
    }
  );
});
