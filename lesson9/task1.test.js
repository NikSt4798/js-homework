import { defineTriangle } from "./task1";

describe("Task 1", () => {
  it("should define if the triangle is right", () => {
    expect(defineTriangle(3, 4, 5)).toBeTruthy();
    expect(defineTriangle(6, 8, 10)).toBeTruthy();
    expect(defineTriangle(12, 35, 37)).toBeTruthy();
    expect(defineTriangle(1, 12, 133)).toBeFalsy();
    expect(defineTriangle(12, 12, 12)).toBeFalsy();
    expect(defineTriangle(1, 12, 1)).toBeFalsy();
    expect(defineTriangle(5, 4, 3)).toBeTruthy();
    expect(defineTriangle(5, 3, 4)).toBeTruthy();
  });
});
