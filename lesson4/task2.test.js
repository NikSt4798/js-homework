import { adminCopy } from "./task2";

describe("Task 2", () => {
  [
    { name: "John" },
    { name: "John", surname: "Smith" },
    { name: "John", role: "User" },
    {},
  ].forEach((el) =>
    it("creates a copy with admin property", () => {
      const admin = adminCopy(el);

      expect("role" in admin).toBeTruthy();
      expect(admin.role).toBe("admin");

      console.log(el);
    })
  );
});
