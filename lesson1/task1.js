export function task1() {
  let a = prompt("Введите а");
  let b = prompt("Введите b");

  console.log(sum(a, b));
  console.log(comp(a, b));
}

function sum(a, b) {
  if (typeof (a + b) === "string") {
    return NaN;
  } else {
    return a + b;
  }
}

function comp(a, b) {
  return a * b;
}
