import { task1 } from "./task1";

describe("Task 1", () => {
  [
    {
      a: 1,
      b: 2,
      result: 2,
    },
    {
      a: 0,
      b: 1,
      result: 1,
    },
    {
      a: -2,
      b: 1,
      result: 1,
    },
  ].forEach((test) => {
    it(`show correct values with a = ${test.a} and b = ${test.b}`, () => {
      jest.spyOn(console, "log");
      jest.spyOn(global.window, "prompt").mockImplementationOnce(() => test.a);
      jest.spyOn(global.window, "prompt").mockImplementationOnce(() => test.b);

      task1();

      expect(console.log).toBeCalledWith(test.result);
    });
  });
});
