import { task3 } from "./task3";

describe("Task 3", () => {
  [
    {
      circle: 314,
      square: 400,
      result: "Circle will fit",
    },
    {
      circle: 35,
      square: 40,
      result: "Circle won't fit",
    },
  ].forEach((test) => {
    it(`show ${test.result} with square area = ${test.square} and circle area = ${test.circle}`, () => {
      jest.spyOn(console, "log");
      jest
        .spyOn(global.window, "prompt")
        .mockImplementationOnce(() => test.circle);
      jest
        .spyOn(global.window, "prompt")
        .mockImplementationOnce(() => test.square);

      task3();

      expect(console.log).toBeCalledWith(test.result);
    });
  });
});
