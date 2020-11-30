const array = [10, 45, 37, 84, 45, 23, 64, 43, 92, 14];

console.log(multiply(array));

export function multiply(array) {
  return array.map((element) => {
    return element * 2;
  });
}
