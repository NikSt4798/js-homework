import { checkIfInputEmpty } from "./task1.js";
import { addParagraph } from "./task2.js";
import { removeExtraParagraphs } from "./task3.js";

const input = document.querySelector("input");
const button = document.querySelector("button");

checkIfInputEmpty(input, button);

input.addEventListener("input", function () {
  checkIfInputEmpty(this, button);
});

button.addEventListener("click", function () {
  addParagraph(document);
  removeExtraParagraphs(document);
});
