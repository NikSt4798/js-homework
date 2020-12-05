import { addParagraph } from "./task2";

describe("Task 2", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });
  ["text", "", 123].forEach((test) => {
    it(`appends ${test} to the body`, () => {
      const input = document.createElement("input");
      input.value = test;
      document.body.append(input);

      addParagraph(document);

      var paragraphs = document.querySelectorAll("p");

      var result;

      paragraphs.forEach((el) => {
        console.log(el.innerText, test);
        if (el.innerText == test) result = true;
      });

      expect(result).toBeTruthy();
    });
  });
});
