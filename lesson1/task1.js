export function task1(a, b) {
  console.log(sum(a, b));
  console.log(comp(a, b));
}

export function sum(a, b) {
  if (typeof (a + b) === "string") {
    return NaN;
  } else {
    return a + b;
  }
}

export function comp(a, b) {
  return a * b;
}
