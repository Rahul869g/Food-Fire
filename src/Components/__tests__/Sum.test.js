import Sum from "../Sum";

test("Check Sum of 2 Positive Numbers", () => {
  expect(Sum(1, 2)).toBe(3);
  expect(Sum(1, 5)).not.toBe(3);
});
