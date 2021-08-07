"use strict";

describe("Feature test", () => {
  let game;

  beforeEach(() => {
    game = new Game();
  })

  it("new games have a current frame and scorecard", () => {
    expect(game.scorecard).toBeInstanceOf(Scorecard);
    expect(game.currentFrame).toBeInstanceOf(Frame);
  })

  it("can record a roll in the current frame", () => {
    game.roll(6)
    expect(game.currentFrame.rolls).toEqual([6])
  })
})
