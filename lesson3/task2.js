for (let i = 1; i < 10; i++) {
  console.log(getLine(i));
}

export function getLine(number) {
  return `7 x ${number} = ${7 * number}`;
}
