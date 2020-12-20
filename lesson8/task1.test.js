import { getDayOfTheWeek } from "./task1";

describe("Task 1", () => {
  [
    ["6.12.2020", "Sunday"],
    ["01.01.2020", "Wednesday"],
    ["26.07.1998", "Sunday"],
    ["1.1.1970", "Thursday"],
  ].forEach((test) => {
    it(`returns day of the week for ${test[0]}`, () => {
      expect(getDayOfTheWeek(test[0])).toBe(test[1]);
    });
  });
});
