import { multiply } from "./task2";

describe("Task 2", () => {
  it("Multiplies all elements by 2", () => {
    expect(multiply([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual([
      2,
      4,
      6,
      8,
      10,
      12,
      14,
      16,
      18,
      20,
    ]);
    expect(multiply([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toStrictEqual([
      20,
      18,
      16,
      14,
      12,
      10,
      8,
      6,
      4,
      2,
    ]);
    expect(multiply([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toStrictEqual([
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ]);
  });
});
