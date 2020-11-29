import { getLine } from "./task2";

describe("Task 2", () => {
  it("Returns full statement", () => {
    expect(getLine(3)).toBe("7 x 3 = 21");
    expect(getLine(5)).toBe("7 x 5 = 35");
    expect(getLine(7)).toBe("7 x 7 = 49");
    expect(getLine(9)).toBe("7 x 9 = 63");
  });
});
