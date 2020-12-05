import { checkIfInputEmpty } from "./task1.js";

const input = document.querySelector("input");
const button = document.querySelector("button");

checkIfInputEmpty(input, button);

input.addEventListener("input", function () {
  checkIfInputEmpty(this, button);
});
