import { task1 } from "./task1";

describe("Task 1", () => {
  [
    {
      a: 1,
      b: 1,
      sum: 2,
      comp: 1,
    },
    {
      a: 0,
      b: 1,
      sum: 1,
      comp: 0,
    },
    {
      a: -1,
      b: 1,
      sum: 0,
      comp: -1,
    },
  ].forEach((test) => {
    it(`show correct values with a = ${test.a} and b = ${test.b}`, () => {
      jest.spyOn(console, "log");
      jest.spyOn(global.window, "prompt").mockImplementationOnce(() => test.a);
      jest.spyOn(global.window, "prompt").mockImplementationOnce(() => test.b);

      task1();

      expect(global.window.prompt).toBeCalledTimes(2);
      expect(global.window.prompt).toBeCalledWith("Введите а");
      expect(global.window.prompt).toBeCalledWith("Введите b");

      expect(console.log).toBeCalledWith(test.sum);
      expect(console.log).toBeCalledWith(test.comp);
    });
  });
});
