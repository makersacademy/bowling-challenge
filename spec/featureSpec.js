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

  it("Multiple frames (non-bonus scores)", () => {
    for (let i = 0; i < 20; i++) {
      game.enterRollPins(1);
    }

    expect(game.currentScore()).toEqual(20);
    expect(game.isGameOver()).toBe(true);
    expect(game.currentFrame()).toEqual(10);
    expect(game.frames[9].rolls).toEqual([1, 1]);
  });

  it("Single spare", () => {
    for (let i = 0; i < 2; i++) {
      game.enterRollPins(5);
    }

    game.enterRollPins(6)
    game.enterRollPins(1)

    expect(game.currentScore()).toEqual(23);
    expect(game.isGameOver()).toBe(false);
    expect(game.currentFrame()).toEqual(3);
    expect(game.frames[0].rolls).toEqual([5, 5]);
    expect(game.frames[0].bonusStatus).toEqual('spare');
    expect(game.frames[0].bonusScore).toEqual(6);

  });
});
