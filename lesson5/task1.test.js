import { task1 } from "./task1";

describe("Task 1", () => {
  it("returns sum of all elements", () => {
    jest.spyOn(console, "log");

    task1();

    expect(console.log).toBeCalledWith(457);
  });
});
