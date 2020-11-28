import { getSum } from "./task3";

describe("Task 3", () => {
  it("Returns correct value", () => {
    expect(getSum(123)).toBe(6);
    expect(getSum(456)).toBe(15);
    expect(getSum(100)).toBe(1);
  });

  it("Returns error on wrong value", () => {
    expect(getSum(12)).toBe("The value is not 3-digit");
    expect(getSum(0)).toBe("The value is not 3-digit");
    expect(getSum("string")).toBe(NaN);
  });
});
