import { checkIfInputEmpty } from "./task1.js";
import { addParagraph } from "./task2.js";

const input = document.querySelector("input");
const button = document.querySelector("button");

checkIfInputEmpty(input, button);

input.addEventListener("input", function () {
  checkIfInputEmpty(this, button);
});

button.addEventListener("click", function () {
  console.log("click");
  addParagraph(document);
});
