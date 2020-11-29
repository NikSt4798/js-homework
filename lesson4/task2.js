const user = {
  name: "John",
};

const admin = adminCopy(user);

console.log(user);
console.log(admin);

export function adminCopy(object) {
  const admin = Object.assign({}, object);

  admin.role = "admin";

  return admin;
}
