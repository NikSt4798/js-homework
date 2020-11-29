const admin = {
  name: "John",
  role: "admin",
};

console.log(getProperties(admin));

export function getProperties(object) {
  let { name, role } = object;

  return `${name} ${role}`;
}
