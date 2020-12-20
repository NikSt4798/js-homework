import { checkIfInputEmpty } from "./task1.js";
import { addParagraph } from "./task2.js";
import { removeExtraParagraphs } from "./task3.js";

export function createLayout(el) {
  for (let i = 0; i < 3; i++) {
    const p = document.createElement("p");
    el.appendChild(p);
  }

  const input = document.createElement("input");

  el.appendChild(input);

  input.addEventListener("input", function () {
    checkIfInputEmpty(this, button);
  });

  const button = document.createElement("button");
  button.innerText = "Click me!";

  el.appendChild(button);
  button.className = "btn";

  button.addEventListener("click", function () {
    addParagraph(document);
    removeExtraParagraphs(document);
  });
}

// createLayout(document.querySelector('div'))
