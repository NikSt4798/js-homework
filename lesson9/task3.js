export function solveEquation(a, b, c) {
  const D = Math.pow(b, 2) - 4 * a * c;

  if (D == 0) {
    return `x = ${b / (2 * a)}`;
  } else {
    const x1 = (-b + Math.sqrt(D)) / (2 * a);
    const x2 = (-b - Math.sqrt(D)) / (2 * a);

    if (isNaN(x1) || isNaN(x2)) {
      return "No solution";
    } else {
      return `x1 = ${x1}, x2 = ${x2}`;
    }
  }
}
