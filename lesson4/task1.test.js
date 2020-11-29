import { addAge } from "./task1";

describe("Task 1", () => {
  it("adds new property", () => {
    const user = {
      name: "John",
    };

    addAge(user, "10");

    expect("age" in user).toBeTruthy();
    expect(user.age).toBe("10");
  });
});
