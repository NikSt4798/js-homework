function task3() {
  let value = prompt("Enter the 3-digit number");
  console.log(getSum(value));
}

export function getSum(value) {
  if (value < 100 || value > 999) {
    return "The value is not 3-digit";
  }
  const digit3 = value % 10;
  const digit1 = (value - (value % 100)) / 100;
  const digit2 = (value - digit1 * 100 - digit3) / 10;
  return digit1 + digit2 + digit3;
}
