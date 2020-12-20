export function task3() {
  const number = prompt("Enter N");

  let sum = 0;
  let j = 0;

  for (let i = 1; i <= number; i += 2) {
    sum += i;
    j++;
  }

  console.log(sum / j);
}
