import { diff } from "./task1";

describe("Task 1", () => {
  it("Returns a - b if a > b", () => {
    expect(diff(8, 5)).toBe(3);
    expect(diff(59, 57)).toBe(2);
    expect(diff(100, 1)).toBe(99);
  });

  it("Returns b - a if a < b", () => {
    expect(diff(8, 58)).toBe(50);
    expect(diff(59, 157)).toBe(98);
    expect(diff(100, 122)).toBe(22);
  });

  it("Returns 0 if a = b", () => {
    expect(diff(58, 58)).toBe(0);
    expect(diff(157, 157)).toBe(0);
    expect(diff(0, 0)).toBe(0);
  });
});
