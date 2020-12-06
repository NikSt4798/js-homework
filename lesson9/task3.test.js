import { solveEquation } from "./task3";

describe("Task 3", () => {
  [
    [1, 0, 0, `x = 0`],
    [1, 0, -1, `x1 = 1, x2 = -1`],
    [1, 1, 1, `No solution`],
    [1, 17, -18, `x1 = 1, x2 = -18`],
    [1, -11, 18, `x1 = 9, x2 = 2`],
  ].forEach((test) => {
    it(`should solve the equation with a = ${test[0]}, b = ${test[1]}, c = ${test[2]}`, () => {
      expect(solveEquation(test[0], test[1], test[2])).toBe(test[3]);
    });
  });
});
