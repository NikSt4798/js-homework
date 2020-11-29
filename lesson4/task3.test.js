import { getProperties } from "./task3";

describe("Task 3", () => {
  it("print name and role properties ", () => {
    const user = { name: "John" };

    expect(getProperties(user)).toBe(`John undefined`);
  });

  it("print name and role properties ", () => {
    const user = { name: "John", surname: "Smith" };

    expect(getProperties(user)).toBe(`John undefined`);
  });

  it("print name and role properties ", () => {
    const user = { name: "Peter", role: "User" };

    expect(getProperties(user)).toBe(`Peter User`);
  });

  it("print name and role properties ", () => {
    const user = {};

    expect(getProperties(user)).toBe(`undefined undefined`);
  });
});
