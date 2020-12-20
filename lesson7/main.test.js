import { beforeAll } from "@jest/globals";
import { createLayout } from "./main";

let element;

beforeAll(() => {
  element = document.createElement("div");
  createLayout(element);
});

describe("Check layout creation", () => {
  it("should create button", () => {
    const button = element.querySelector(".btn");
    expect(button).not.toBe(null);
    expect(button.innerText).toBe("Click me!");
  });

  it("should create input", () => {
    const input = element.querySelector("input");
    expect(input).not.toBe(null);
    expect(input.innerText).toBe(undefined);
  });

  it("should create paragraphs", () => {
    const p = element.querySelectorAll("p");
    expect(p.length).toBe(3);
  });
});
