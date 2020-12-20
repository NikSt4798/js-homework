import { task1 } from "./task1";

describe("Task 1", () => {
  it(`should print 3825`, () => {
    jest.spyOn(console, "log");

    task1();

    expect(console.log).toBeCalledWith(3825);
  });
});
