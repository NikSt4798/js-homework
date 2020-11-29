import { getSum } from "./task1";

describe("Task 1", () => {
  it("Returns sum from 50 to 100", () => {
    expect(getSum()).toBe(3825);
  });
});
