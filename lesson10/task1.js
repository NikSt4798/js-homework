export function checkDate(input) {
  const expression = /\b[0-3]?[1-9]{1}\.[0-1]?[0-9]\.[1-9].[0-9]{0,2}\b/;

  return input.match(expression);
}
