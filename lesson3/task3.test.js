import { task3 } from "./task3";

describe("Task 3", () => {
  [
    {
      number: 100,
      result: 50,
    },
    {
      number: 50,
      result: 25,
    },
    {
      number: 250,
      result: 125,
    },
  ].forEach((test) => {
    it(`show ${test.result} for N = ${test.number}`, () => {
      jest.spyOn(console, "log");
      jest
        .spyOn(global.window, "prompt")
        .mockImplementationOnce(() => test.number);

      task3();

      expect(console.log).toBeCalledWith(test.result);
    });
  });
});
