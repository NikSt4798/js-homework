const circle = 36;
const square = 25;

console.log(isCircleFit(circle, square));

export function isCircleFit(circle, square) {
  var circleDiameter = Math.sqrt(circle / Math.PI) * 2;
  var squareDiameter = Math.sqrt(square);

  return circleDiameter <= squareDiameter
    ? "Circle will fit"
    : "Circle won't fit";
}
