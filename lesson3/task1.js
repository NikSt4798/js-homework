console.log(getSum());

export function getSum() {
  let sum = 0;

  for (let i = 50; i <= 100; i++) {
    sum += i;
  }

  return sum;
}
