import { checkPhoneNumber } from "./task3";

describe("Test 3", () => {
  [
    `+7-123-345-6789`,
    `+71234567890`,
    `+3751234567890`,
    `81234567890`,
    `012345678901234567`,
    `+7-123-4567890`,
    `+7-123456-7890`,
    `+7-12345678-90`,
  ].forEach((test) => {
    it(`should check if ${test} is a valid phone number`, () => {
      expect(checkPhoneNumber(test)).toBeTruthy();
    });
  }),
    [`0123456789012345670`, `+7-12345-67890`, `+7-123456789-0`].forEach(
      (test) => {
        it(`should check if ${test} is not a valid phone number`, () => {
          expect(checkPhoneNumber(test)).toBeFalsy();
        });
      }
    );
});
