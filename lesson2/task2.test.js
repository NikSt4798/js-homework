import { task2 } from "./task2";

describe("Task 2", () => {
  [
    {
      number: "1",
      result: "January",
    },
    {
      number: "6",
      result: "June",
    },
    {
      number: "13",
      result: "No such month",
    },
  ].forEach((test) => {
    it(`show ${test.result} with number = ${test.number}`, () => {
      jest.spyOn(console, "log");
      jest
        .spyOn(global.window, "prompt")
        .mockImplementationOnce(() => test.number);

      task2();

      expect(console.log).toBeCalledWith(test.result);
    });
  });
});
