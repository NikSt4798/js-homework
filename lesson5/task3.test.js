import { printMinMax } from "./task3";

describe("Task 3", () => {
  [
    {
      array: [234, 8568, 2456, 94679, 13451, 44, 3417, 484, 34523452345],
      result: `Min: 44, max: 34523452345`,
    },
    {
      array: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      result: `Min: 1, max: 1`,
    },
    {
      array: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      result: `Min: 0, max: 0`,
    },
  ].forEach((test) => {
    it("Print minimum and maximum element of an array", () => {
      jest.spyOn(console, "log");

      printMinMax(test.array);

      expect(console.log).toBeCalledWith(test.result);
    });
  });
});
