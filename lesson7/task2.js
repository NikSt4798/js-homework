export function addParagraph(el) {
  const input = el.querySelector("input");

  const p = document.createElement("p");
  p.innerText = input.value;
  input.value = "";

  el.appendChild(p);
}
