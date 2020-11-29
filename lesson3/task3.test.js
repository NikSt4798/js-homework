import { getAverage } from "./task3";

describe("Task 3", () => {
  it("Returns average value", () => {
    expect(getAverage(10)).toBe(5);
    expect(getAverage(15)).toBe(8);
    expect(getAverage(1)).toBe(1);
    expect(getAverage(1)).toBe(1);
  });
});
