const { describe } = require("jest-circus");
const Game = require("../src/game");

beforeEach(() => {
  game = new Game();
});

describe("Game", () => {
  test("has an empty array of frames", () => {
    expect(game.frames).toEqual([]);
  });

  test("adds a frame to the array", () => {
    frame = { first_roll: null, second_roll: null, score: 0 };
    game._createFrame(frame);
    expect(game.frames.length).toEqual(1);
  });
});

describe("Strikes", () => {
  test("strike returns true", () => {
    frame = { first_roll: 10, second_roll: null, score: 10 };
    expect(game._isStrike(frame)).toEqual(true);
  });

  test("spare is not a strike", () => {
    frame = { first_roll: 4, second_roll: 6, score: 10 };
    expect(game._isStrike(frame)).not.toEqual(true);
  });
});

describe("Spares", () => {
  test("spare returns true", () => {
    frame = { first_roll: 4, second_roll: 6, score: 10 };
    expect(game._isSpare(frame)).toEqual(true);
  });
});

describe("if first_roll exceeds 10", () => {
  test("this an error", () => {
    expect(() => {
      game.roll(11, 0);
    }).toThrow("There are only 10 pins!");
  });
});

describe("combined exceeds 10", () => {
  test("throws an error", () => {
    expect(() => {
      game.roll(6, 5);
    }).toThrow("There are only 10 pins!");
  });
});

describe("input is not a number", () => {
  test("throws an error", () => {
    expect(() => {
      game.roll("a", 4);
    }).toThrow("Please enter a number!");
  });
});

describe("input is a negative number", () => {
  test("throws an error", () => {
    expect(() => {
      game.roll(-1, -4);
    }).toThrow("You cannot throw a negative roll!");
  });
});
