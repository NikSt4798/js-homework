import { getMonth } from "./task2";

describe("Task 2", () => {
  it("should return name of the month", () => {
    expect(getMonth("1")).toBe("January");
    expect(getMonth("4")).toBe("April");
    expect(getMonth("12")).toBe("December");
  });
  it("should decline other numbers", () => {
    expect(getMonth("50")).toBe("No such month");
  });
});
