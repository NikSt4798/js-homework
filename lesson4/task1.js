const user = {
  name: "John",
};

const age = prompt("Enter age");

addAge(user, age);

export function addAge(object, age) {
  object.age = age;
}

console.log(user);
