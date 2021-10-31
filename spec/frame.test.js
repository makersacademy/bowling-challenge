const { describe } = require("jest-circus");
const Frame = require("../src/frame");

describe("Frame", () => {
  const frame = new Frame();

  test("sets rolls at null", () => {
    expect(frame.first_roll).toEqual(null);
    expect(frame.second_roll).toEqual(null);
  });

  test("updates first roll", () => {
    frame.firstRoll(3);
    expect(frame.first_roll).toEqual(3);
  });

  test("score updates with first roll", () => {
    expect(frame.score).toEqual(3);
  });

  test("updates second roll", () => {
    frame.secondRoll(4);
    expect(frame.second_roll).toEqual(4);
  });

  test("score updates with second roll", () => {
    expect(frame.score).toEqual(7);
  });
});

beforeEach(() => {
  frame = new Frame();
});

describe("if first_roll exceeds 10", () => {
  test("this an error", () => {
    expect(() => {frame.firstRoll(11)}).toThrow("There are only 10 pins!");
  });
});

describe("combined exceeds 10", () => {
  test("throws an error", () => {
    frame.firstRoll(5);
    expect(() => {frame.secondRoll(6)}).toThrow("There are only 10 pins!");
  });
});

describe("input is not a number", () => {
  test("throws an error", () => {
    expect(() => {frame.firstRoll("a")}).toThrow("Please enter a number!");
  });
});

describe("input is a negative number", () => {
  test("throws an error", () => {
    expect(() => {frame.firstRoll(-1)}).toThrow("You cannot throw a negative roll!");
  });
});
