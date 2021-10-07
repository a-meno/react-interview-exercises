import isPalindrome from "../exercise-2";

describe("exercise 2", () => {
  it("should identify 'racecar' as a palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("should identify 'level' as a palindrome", () => {
    expect(isPalindrome("level")).toBe(true);
  });

  it("should identify 'rotor' as a palindrome", () => {
    expect(isPalindrome("rotor")).toBe(true);
  });

  it("should identify 'Don't nod.' as a palindrome", () => {
    expect(isPalindrome("Don't nod.")).toBe(true);
  });

  it("should identify 'My gym' as a palindrome", () => {
    expect(isPalindrome("My gym")).toBe(true);
  });

  it("should identify 'Red rum, sir, is murder' as a palindrome", () => {
    expect(isPalindrome("Red rum, sir, is murder")).toBe(true);
  });

  it("should identify '1991' as a palindrome", () => {
    expect(isPalindrome("1991")).toBe(true);
  });

  it("should not identify 'Not a palindrome' as a palindrome", () => {
    expect(isPalindrome("Not a palindrome")).toBe(false);
  });

  it("should not identify an empty string as a palindrome", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("should handle non-strings gracefully", () => {
    expect(isPalindrome(23199143)).toBe(false);
    expect(isPalindrome(231991.43)).toBe(false);
    expect(isPalindrome({})).toBe(false);
    expect(isPalindrome(() => {})).toBe(false);
  });
});
