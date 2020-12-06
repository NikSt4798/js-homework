import { removeExtraParagraphs } from "./task3";

describe("Task 3", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  [0, 1, 5, 10, 1000].forEach((test) => {
    it(`removes extra paragraphs for ${test} elements`, () => {
      for (let i = 0; i < test; i++) {
        let p = document.createElement("p");
        document.body.appendChild(p);
      }

      removeExtraParagraphs(document);

      expect(document.querySelectorAll("p").length).toBeLessThanOrEqual(5);
    });
  });
});
