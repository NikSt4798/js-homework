export function addParagraph(document) {
  const input = document.querySelector("input");

  const p = document.createElement("p");
  p.innerText = input.value;

  document.body.append(p);
}
