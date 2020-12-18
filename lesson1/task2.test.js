import { task2 } from "./task2";

describe("Task 2", () => {
  [
    {
      a: "123",
      b: "4567",
      result: 7,
    },
    {
      a: "one two three",
      b: "four",
      result: 17,
    },
    {
      a: "  ",
      b: "     ",
      result: 7,
    },
  ].forEach((test) => {
    it(`show correct result with first string = ${test.a} and second string = ${test.b}`, () => {
      jest.spyOn(console, "log");
      jest.spyOn(global.window, "prompt").mockImplementationOnce(() => test.a);
      jest.spyOn(global.window, "prompt").mockImplementationOnce(() => test.b);

      task2();

      expect(console.log).toBeCalledWith(test.result);
    });
  });
});
