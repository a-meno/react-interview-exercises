import max from "../exercise-1";

describe("exercise 1", () => {
  it("should return the maximum value of 600", () => {
    const testArray = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * 500)
    );
    expect(max([600, ...testArray])).toBe(600);
  });

  it("should return the maximum value of 6", () => {
    expect(max([4, 6, 2, -4, 0, -1])).toBe(6);
  });

  it("should return the maximum value of 2.499", () => {
    const testArray = Array.from({ length: 100 }, () => Math.random());
    expect(max([...testArray, 2.499]));
  });
});
