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
    game.rolls(0);
    game.rolls(0);
    game.rolls(0);
    game.rolls(0);
    game.rolls(0);
    game.rolls(0);
    game.rolls(0);
    game.rolls(0);
    game.rolls(0);
    game.rolls(0);
    game.rolls(0);
    game.rolls(0);
    game.rolls(0);
    game.rolls(0);
    game.rolls(0);
    game.rolls(0);
    game.rolls(0);
    game.rolls(0);
    game.rolls(0);
    game.rolls(0);
    expect(game.score()).toBe(0);
  });
});
