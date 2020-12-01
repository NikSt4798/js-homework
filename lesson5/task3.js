const array = [10, 45, 37, 84, 45, 23, 64, 43, 92, 14];

console.log(printMinMax(array));

export function printMinMax(array) {
  let min = Number.POSITIVE_INFINITY;
  let max = 0;

  array.forEach((element) => {
    if (element > max) max = element;

    if (element < min) min = element;
  });

  return `Min: ${min}, max: ${max}`;
}
