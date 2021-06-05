"use strict";

describe("Game Scenarios", () => {
  let game;
  beforeEach(function () {
    game = new Scorecard();
  });

  it("Gutter Game", () => {
    for (let i = 0; i < 20; i++) {
      game.enterRollPins(0);
    }

    expect(game.currentScore()).toEqual(0);
    expect(game.isGameOver()).toBe(true);
    expect(game.currentFrame()).toEqual(10);
  });

  it("First frame (non-bonus scores)", () => {
    for (let i = 0; i < 2; i++) {
      game.enterRollPins(1);
    }

    expect(game.currentScore()).toEqual(2);
    expect(game.isGameOver()).toBe(false);
    expect(game.currentFrame()).toEqual(2);
    expect(game.frames[0].rolls).toEqual([1, 1]);
  });
});
