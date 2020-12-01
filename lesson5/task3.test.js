import { printMinMax } from "./task3";

describe("Task 3", () => {
  it("Print minimum and maximum element of an array", () => {
    expect(
      printMinMax([234, 8568, 2456, 94679, 13451, 44, 3417, 484, 34523452345])
    ).toBe(`Min: 44, max: 34523452345`);
    expect(printMinMax([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(`Min: 0, max: 0`);
    expect(printMinMax([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toBe(`Min: 1, max: 1`);
  });
});
