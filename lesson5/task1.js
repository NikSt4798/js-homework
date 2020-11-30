const array = [10, 45, 37, 84, 45, 23, 64, 43, 92, 14];

console.log(arraySum(array));

export function arraySum(array) {
  let sum = 0;

  array.forEach((element) => {
    sum += element;
  });

  return sum;
}
