function task3() {
  let value = prompt("Enter the 3-digit number");
  console.log(getSum(value));
}

export function getSum(value) {
  if (value < 100 || value > 999) {
    return "The value is not 3-digit";
  }
  let digit1 = String(value)[0];
  let digit2 = String(value)[1];
  let digit3 = String(value)[2];
  return Number(digit1) + Number(digit2) + Number(digit3);
}
