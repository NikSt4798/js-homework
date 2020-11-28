import { getBigger } from "./task1";

describe("Task1", () => {
  it("Should return bigger value", () => {
    expect(getBigger(10, 20)).toBe(20);
    expect(getBigger(30, 20)).toBe(30);
  });
});
