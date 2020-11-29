const n = prompt("Enter N", 100);

console.log(getAverage(n));

export function getAverage(number) {
  let sum = 0;
  let j = 0;

  for (let i = 1; i <= number; i += 2) {
    sum += i;
    j++;
  }

  return sum / j;
}
