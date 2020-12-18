export function task3() {
  const circle = prompt("Enter circle area");
  const square = prompt("Enter square area");

  var circleDiameter = Math.sqrt(circle / Math.PI) * 2;
  var squareDiameter = Math.sqrt(square);

  let result =
    circleDiameter <= squareDiameter ? "Circle will fit" : "Circle won't fit";

  console.log(result);
}
