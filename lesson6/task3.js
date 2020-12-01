export function pow(a, x) {
  if (x == 0) return 1;

  let b = a;

  for (let i = 1; i < x; i++) {
    b *= a;
  }

  return b;
}
