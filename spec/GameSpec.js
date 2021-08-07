"use strict";

describe("Game", () => {
  let game;
  let scorecard;
  let frame;

  beforeEach(() => {
    scorecard = jasmine.createSpy("scorecard");
    frame = jasmine.createSpy("frame");
    game = new Game(scorecard, frame);
  })

  it("has a scorecard and current frame upon creation", () => {
    expect(game.scorecard).toEqual(scorecard);
    expect(game.currentFrame).toEqual(frame);
  })
})
