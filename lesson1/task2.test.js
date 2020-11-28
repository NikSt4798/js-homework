import { symbolsCount } from "./task2";

describe("Task 2", () => {
  it("returns correct result", () => {
    expect(symbolsCount("123", "789")).toBe(6);
    expect(symbolsCount("skditu", "=-p[]")).toBe(11);
  });

  it("returns wrong result", () => {
    expect(symbolsCount(123, 789)).toBe(NaN);
    expect(symbolsCount([], {})).toBe(NaN);
  });
});
