const { expect } = require("@jest/globals");
const { sum, min, multi, div, parser } = require("./sum");
// A test works like this: define the test()
// test takes two parameters, the comment of the test and the functionality

// To Be is a strict way to test the result of a test.
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test(" 5 - 2 to equal 3", () => {
  expect(min(5, 2)).toBe(3);
});

test("5 * 2 to equal 10", () => {
  expect(multi(5, 2)).toBe(10);
});

test("devide 5 / 2 to equal 10", () => {
  expect(div(10, 2)).toBe(5);
});

test("Parse a string number to an integer", () => {
  expect(parser("5")).toBe(5);
});

// Equal to is more flexible to multiplevalues
test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

// Not to be
test("adding positive numbers is not zero", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

// Truthiness are simple booleans
test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

// Numbers
// Most ways of comparing numbers have matcher equivalents.

test("two plus two", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

// For floating point equality, use toBeCloseTo instead of toEqual, because you don't want a test to depend on a tiny rounding error.

test("adding floating point numbers", () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});

// Strings
// You can check strings against regular expressions with toMatch:

test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});

// Arrays and iterables
// You can check if an array or iterable contains a particular item using toContain:

const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];

test("the shopping list has milk on it", () => {
  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("milk");
});

// Exceptions
// If you want to test whether a particular function throws an error when it's called, use toThrow.

function compileAndroidCode() {
  throw new Error("you are using the wrong JDK");
}

test("compiling android goes as expected", () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK");
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});
