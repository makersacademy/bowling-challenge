"use-strict";

describe("score", () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it("can create a scorecard", () => {
    expect(game).toBeInstanceOf(Game);
  });

  it("outputs a score of 0 after 20 consecutive rolls of hitting 0 pins", () => {
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    expect(game.score()).toBe(0);
  });

  it("outputs a score of 60 after 20 consecutive rolls of hitting 3 pins", () => {
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    expect(game.score()).toBe(60);
  });
});
