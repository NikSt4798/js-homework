import { task2 } from "./task2";

describe("Task 2", () => {
  it(`should print 3825`, () => {
    jest.spyOn(console, "log");

    task2();

    expect(console.log).toBeCalledTimes(9);
    expect(console.log).lastCalledWith("7 x 9 = 63");
  });
});
