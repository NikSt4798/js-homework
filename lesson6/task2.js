export function isWord(string) {
  return string.split(",").length == 1 && string.split(" ").length == 1;
}
