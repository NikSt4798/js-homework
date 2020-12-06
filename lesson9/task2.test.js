import { getArea, getLength } from "./task2";

describe("Task 2", () => {
  it("should find length of circle", () => {
    expect(getLength(1)).toBe(2 * Math.PI);
    expect(getLength(5)).toBe(10 * Math.PI);
    expect(getLength(20)).toBe(40 * Math.PI);
  });

  it("should find area of circle", () => {
    expect(getArea(1)).toBe(Math.PI);
    expect(getArea(2)).toBe(4 * Math.PI);
    expect(getArea(10)).toBe(100 * Math.PI);
  });
});
