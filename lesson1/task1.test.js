import { comp, sum } from "./task1";

describe("Task 1", () => {
  it("show correct values", () => {
    expect(sum(1, 2)).toBe(3);
    expect(comp(5, 6)).toBe(30);
  });

  it("falls on wrong values", () => {
    expect(sum("one", "two")).toBe(NaN);
    expect(comp("five", "six")).toBe(NaN);
  });
});
