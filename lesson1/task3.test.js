import { task3 } from "./task3";

describe("Task 3", () => {
  [
    {
      value: 123,
      result: 6,
    },
    {
      value: 100,
      result: 1,
    },
    {
      value: "000",
      result: "The value is not 3-digit",
    },
    {
      value: 99,
      result: "The value is not 3-digit",
    },
    {
      value: 1000,
      result: "The value is not 3-digit",
    },
  ].forEach((test) => {
    it(`show correct result with value = ${test.value}`, () => {
      jest.spyOn(console, "log");
      jest
        .spyOn(global.window, "prompt")
        .mockImplementationOnce(() => test.value);

      task3();

      expect(console.log).toBeCalledWith(test.result);
    });
  });
});
