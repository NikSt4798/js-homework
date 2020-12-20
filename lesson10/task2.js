export function checkEmail(input) {
  const expression = /[a-zA-z0-9]+@[a-z0-9]+\.[a-z]{2,5}/;

  return input.match(expression);
}
