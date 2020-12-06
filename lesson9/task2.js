const R = 12;

console.log(`Length is ${getLength(R)}, area is ${getArea(R)}`);

export function getLength(R) {
  return 2 * Math.PI * R;
}

export function getArea(R) {
  return Math.PI * Math.pow(R, 2);
}
