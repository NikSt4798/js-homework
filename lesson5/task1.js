export function task1() {
  const array = [10, 45, 37, 84, 45, 23, 64, 43, 92, 14];

  console.log(array.reduce((sum, element) => (sum += element)));
}
