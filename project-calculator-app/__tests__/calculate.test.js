import calculateResult from "../components/Calculate";

describe("calculate the results", () => {
  test.each`
    firstOperand | operator | secondOperand | expected
    ${"1"}       | ${"+"}   | ${"2"}        | ${3}
    ${"12"}      | ${"+"}   | ${"24"}       | ${36}
    ${"1.1"}     | ${"+"}   | ${"2.2"}      | ${3.3}
    ${"9.54"}    | ${"+"}   | ${"6.45"}     | ${15.99}
    ${"1.132"}   | ${"+"}   | ${"2.2"}      | ${3.33}
  `(
    "testing the + If $firstOperand $operator $secondOperand should return $expected",
    ({ firstOperand, operator, secondOperand, expected }) => {
      const result = calculateResult(firstOperand, operator, secondOperand);
      expect(result[1]).toBe(expected);
    }
  );
  test.each`
    firstOperand | operator | secondOperand | expected
    ${"2"}       | ${"-"}   | ${"3"}        | ${-1}
    ${"34"}      | ${"-"}   | ${"24"}       | ${10}
    ${"2.1"}     | ${"-"}   | ${"1.2"}      | ${0.9}
    ${"8.65"}    | ${"-"}   | ${"6.55"}     | ${2.1}
    ${"3.654"}   | ${"-"}   | ${"2.2"}      | ${1.45}
  `(
    "testing the - If $firstOperand $operator $secondOperand should return $expected",
    ({ firstOperand, operator, secondOperand, expected }) => {
      const result = calculateResult(firstOperand, operator, secondOperand);
      expect(result[1]).toBe(expected);
    }
  );
  test.each`
    firstOperand | operator | secondOperand | expected
    ${"5"}       | ${"X"}   | ${"2"}        | ${10}
    ${"34"}      | ${"X"}   | ${"36"}       | ${1224}
    ${"2.8"}     | ${"X"}   | ${"3"}        | ${8.4}
    ${"7.96"}    | ${"X"}   | ${"32"}       | ${254.72}
    ${"3.456"}   | ${"X"}   | ${"22"}       | ${76.03}
  `(
    "testing the X If $firstOperand $operator $secondOperand should return $expected",
    ({ firstOperand, operator, secondOperand, expected }) => {
      const result = calculateResult(firstOperand, operator, secondOperand);
      expect(result[1]).toBe(expected);
    }
  );
  test.each`
    firstOperand | operator | secondOperand | expected
    ${"5"}       | ${"X"}   | ${"2"}        | ${10}
    ${"34"}      | ${"X"}   | ${"36"}       | ${1224}
    ${"2.8"}     | ${"X"}   | ${"3"}        | ${8.4}
    ${"7.96"}    | ${"X"}   | ${"32"}       | ${254.72}
    ${"3.654"}   | ${"X"}   | ${"22"}       | ${80.39}
  `(
    "testing the - If $firstOperand $operator $secondOperand should return $expected",
    ({ firstOperand, operator, secondOperand, expected }) => {
      const result = calculateResult(firstOperand, operator, secondOperand);
      expect(result[1]).toBe(expected);
    }
  );
  test.each`
    firstOperand | operator | secondOperand | expected
    ${"27"}      | ${"/"}   | ${"3"}        | ${9}
    ${"54"}      | ${"/"}   | ${"6"}        | ${9}
    ${"32.8"}    | ${"/"}   | ${"4"}        | ${8.2}
    ${"7.96"}    | ${"/"}   | ${"32"}       | ${0.25}
    ${"3.654"}   | ${"/"}   | ${"22"}       | ${0.17}
    ${"6"}       | ${"/"}   | ${"0"}        | ${"Error"}
    ${"77"}      | ${"/"}   | ${"0"}        | ${"Error"}
  `(
    "testing the - If $firstOperand $operator $secondOperand should return $expected",
    ({ firstOperand, operator, secondOperand, expected }) => {
      const result = calculateResult(firstOperand, operator, secondOperand);
      expect(result[1]).toBe(expected);
    }
  );
  test.each`
    firstOperand | operator | secondOperand | expected
    ${"3.456"}   | ${"+"}   | ${"22"}       | ${25.46}
    ${"7.963"}   | ${"-"}   | ${"32.3"}     | ${-24.34}
    ${"32.48"}   | ${"X"}   | ${"94.532"}   | ${3070.4}
    ${"7.967"}   | ${"/"}   | ${"32"}       | ${0.25}
  `(
    "testing the rounding If $firstOperand $operator $secondOperand should return $expected",
    ({ firstOperand, operator, secondOperand, expected }) => {
      const result = calculateResult(firstOperand, operator, secondOperand);
      expect(result[1]).toBe(expected);
    }
  );
  test.each`
    firstOperand | operator | secondOperand | expected
    ${"96,32.3"} | ${"/"}   | ${"65.432"}   | ${"Error: Invalid input"}
    ${"96,32.3"} | ${"X"}   | ${"65.432"}   | ${"Error: Invalid input"}
    ${"10h"}     | ${"X"}   | ${"45.67.7"}  | ${"Error: Invalid input"}
    ${"9.54.5"}  | ${"+"}   | ${"7.456"}    | ${"Error: Invalid input"}
    ${"12.54.2"} | ${"-"}   | ${"65.432"}   | ${"Error: Invalid input"}
    ${"15.52"}   | ${"+"}   | ${"hello"}    | ${"Error: Invalid input"}
    ${"15.52"}   | ${"%"}   | ${"5.432"}    | ${"Error: wrong operator"}
    ${"15.52"}   | ${"$"}   | ${"5.432"}    | ${"Error: wrong operator"}
    ${"14"}      | ${"/"}   | ${"0"}        | ${`Not devisable by 0`}
    ${"99"}      | ${"/"}   | ${"0"}        | ${`Not devisable by 0`}
  `(
    "testing the errors If $firstOperand $operator $secondOperand should return $expected",
    ({ firstOperand, operator, secondOperand, expected }) => {
      const result = calculateResult(firstOperand, operator, secondOperand);
      expect(result[0]).toBe(expected);
    }
  );
});
