import { pow } from "./task3";

describe("Task 3", () => {
  it("returns a^x", () => {
    expect(pow(2, 10)).toBe(1024);
    expect(pow(12345, 0)).toBe(1);
    expect(pow(0, 0)).toBe(Math.pow(0, 0));
  });
});
