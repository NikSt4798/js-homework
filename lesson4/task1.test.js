import { addAge } from "./task1";

describe("Task 1", () => {
  let user;

  beforeEach(() => {
    user = {
      name: "John",
    };
  });

  [
    { age: "1" },
    { age: "0" },
    { age: "10" },
    { age: "100" },
    { age: 123 },
    { age: 0 },
    { age: null },
  ].forEach((el) => {
    it(`should return ${el.age} as age`, () => {
      addAge(user, el.age);

      expect("age" in user).toBeTruthy();
      expect(user.age).toBe(el.age);
    });
  });
});
