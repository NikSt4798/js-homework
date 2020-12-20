import { checkDate } from "./task1";

describe("Task 1", () => {
  [`26.07.1998`, `1.1.2020`, `01.1.19`, `15.07.1000`].forEach((test) => {
    it(`should check if ${test} is a valid date`, () => {
      expect(checkDate(test)).toBeTruthy();
    });
  }),
    [`1.20.1201`, `0.0.19`, `1.01.0220`, `41.2.2020`].forEach((test) => {
      it(`should check if ${test} is not a valid date`, () => {
        expect(checkDate(test)).toBeFalsy();
      });
    });
});
