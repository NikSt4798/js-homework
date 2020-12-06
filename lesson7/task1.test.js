import { checkIfInputEmpty } from "./task1";

describe("Task 1", () => {
  it("hides button if the field is empty", () => {
    var input = document.createElement("input");
    var button = document.createElement("button");

    expect(button.hidden).toBeFalsy();
    expect(input.value).toBe("");

    checkIfInputEmpty(input, button);

    expect(button.hidden).toBeTruthy();
    expect(input.value).toBe("");
  });

  it("reveals button if the field is not empty", () => {
    var input = document.createElement("input");
    var button = document.createElement("button");

    input.value = 123;

    expect(button.hidden).toBeFalsy();
    expect(input.value).toBe("123");

    checkIfInputEmpty(input, button);

    expect(button.hidden).toBeFalsy();
    expect(input.value).toBe("123");
  });
});
