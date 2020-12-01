import { isWord } from "./task2";

describe("Task 2", () => {
  it("returns true if there is one word", () => {
    expect(isWord("I")).toBeTruthy();
    expect(isWord("Be")).toBeTruthy();
    expect(isWord("Velociraptor")).toBeTruthy();
  });

  it("returns false if there is more than one word", () => {
    expect(isWord("I am")).toBeFalsy();
    expect(isWord("One,two,three")).toBeFalsy();
    expect(isWord("One, two")).toBeFalsy();
  });
});
