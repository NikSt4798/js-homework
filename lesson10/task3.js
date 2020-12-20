export function checkPhoneNumber(input) {
  const expression = /\+?\b[0-9]{1,8}-?[0-9]{3}-?[0-9]{3}-?[0-9]{2}-?[0-9]{2}\b/;

  return input.match(expression);
}
