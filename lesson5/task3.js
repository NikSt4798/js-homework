export function printMinMax(array) {
  let min = Number.POSITIVE_INFINITY;
  let max = 0;

  array.forEach((element) => {
    if (element > max) max = element;

    if (element < min) min = element;
  });

  console.log(`Min: ${min}, max: ${max}`);
}
