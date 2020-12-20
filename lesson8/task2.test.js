import { getMinutesFromStart } from "./task2";

describe("Task 2", () => {
  [
    [new Date(2020, 12, 6, 0, 21), 21],
    [new Date(2020, 12, 6, 12, 0), 720],
    [new Date(2020, 12, 6, 23, 59), 1439],
    [new Date(2020, 12, 6, 0, 0), 0],
  ].forEach((test) => {
    it(`prints minutes from the beginning of the ${test[0]}`, () => {
      expect(getMinutesFromStart(test[0])).toBe(test[1]);
    });
  });
});
