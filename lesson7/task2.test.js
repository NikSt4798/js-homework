import { addParagraph } from "./task2";

describe("Task 2", () => {
  let div;

  beforeEach(() => {
    div = document.createElement("div");
  });
  ["text", "", 123].forEach((test) => {
    it(`appends ${test} to the body`, () => {
      const input = document.createElement("input");
      input.value = test;
      div.appendChild(input);

      addParagraph(div);

      var paragraphs = div.querySelectorAll("p");

      var result;

      paragraphs.forEach((el) => {
        if (el.innerText == test) result = true;
      });

      expect(result).toBeTruthy();
    });
  });
});
