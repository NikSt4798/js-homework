import { arraySum } from "./task1";

describe("Task 1", () => {
  it("returns sum of all elements", () => {
    expect(arraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(55);
    expect(arraySum([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toBe(55);
    expect(arraySum([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(0);
  });
});
