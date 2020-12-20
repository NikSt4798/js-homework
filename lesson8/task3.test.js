import { defineYoungerUser } from "./task3";

describe("Test 3", () => {
  [
    ["31.12.1979", "26.4.1990", "Second user is younger"],
    ["31.12.1233", "26.4.998", "First user is younger"],
    ["1.12.2000", "1.1.2000", "First user is younger"],
    ["1.12.1979", "2.12.1979", "Second user is younger"],
  ].forEach((test) => {
    it("shoud define younger user", () => {
      expect(defineYoungerUser(test[0], test[1])).toBe(test[2]);
    });
  });
});
