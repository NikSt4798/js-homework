import { task2 } from "../lesson3/task2";
import { task1 } from "./task1";

describe("Task 1", () => {
  [
    { age: "1" },
    { age: "0" },
    { age: "10" },
    { age: "100" },
    { age: 123 },
    { age: 0 },
    { age: null },
  ].forEach((test) => {
    it(`should return ${test.age} as age`, () => {
      jest.spyOn(console, "log");
      jest
        .spyOn(global.window, "prompt")
        .mockImplementationOnce(() => test.age);

      task1();

      expect(console.log).toBeCalledWith(test.age);
    });
  });
});
