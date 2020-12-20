export function task3() {
  let value = prompt("Enter the 3-digit number");

  let result;

  if (value < 100 || value > 999) {
    result = "The value is not 3-digit";
  } else {
    const digit3 = value % 10;
    const digit1 = (value - (value % 100)) / 100;
    const digit2 = (value - digit1 * 100 - digit3) / 10;
    result = digit1 + digit2 + digit3;
  }

  console.log(result);
}
