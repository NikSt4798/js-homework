export function removeExtraParagraphs(document) {
  const paragraphs = document.querySelectorAll("p");
  if (paragraphs.length > 5) {
    for (let i = 0; i < paragraphs.length - 5; i++) {
      paragraphs[i].parentNode.removeChild(paragraphs[i]);
    }
  }
}
