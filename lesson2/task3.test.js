import { isCircleFit } from "./task3";

describe("Task 3", () => {
  it("Should inform about fitting", () => {
    expect(isCircleFit(314, 400)).toBe("Circle will fit");
    expect(isCircleFit(35, 40)).toBe("Circle won't fit");
  });
});
