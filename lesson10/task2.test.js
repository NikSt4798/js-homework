import { checkEmail } from "./task2";

describe("Test 2", () => {
  [
    `nikst4798@gmail.com`,
    `123ksdhfallifahsdfogalms@qwe.cxvs`,
    `test@test.test`,
  ].forEach((test) => {
    it(`should check if ${test} is a valid e-mail`, () => {
      expect(checkEmail(test)).toBeTruthy();
    });
  }),
    [`!@#$%^&*()`, `otus.ru`, `@otus.ru`].forEach((test) => {
      it(`should check if ${test} is not a valid e-mail`, () => {
        expect(checkEmail(test)).toBeFalsy();
      });
    });
});
