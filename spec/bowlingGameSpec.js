"use strict";

describe("BowlingGame", () => {
  let game;

  beforeEach(() => {
    game = new BowlingGame();
  });

  it("can roll a gutter game", () => {
    rollMany(0, 20);
    expect(game.score()).toBe(0);
  });

  it("can roll all ones", () => {
    rollMany(1, 20);
    expect(game.score()).toBe(20);
  });

  it("can roll a spare", () => {
    game.roll(5);
    game.roll(5);
    game.roll(3);
    // Bonus 3 points on that roll for getting a spare.
    rollMany(0, 17);
    expect(game.score()).toBe(16);
  });

  it("can roll a strike", () => {
    game.roll(10);
    game.roll(3);
    game.roll(4);
    // First roll of 10 (strike) will count as 2 rolls.
    rollMany(0, 16);
    expect(game.score()).toBe(24);
  });

  it("can roll a perfect game", () => {
    // A perfect game is 10 regular strikes and 2 strikes for
    // the bonus in the 10th frame
    rollMany(10, 12);
    expect(game.score()).toBe(300);
  });

  let rollMany = function (pins, rolls) {
    for (let i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  };
});

// Rollmany(Number of pins knocked down, Number of rolls left)
