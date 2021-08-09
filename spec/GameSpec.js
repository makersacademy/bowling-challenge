"use strict";

describe("Game", () => {
  let game;
  let scorecard;
  let frame;

  beforeEach(() => {
    scorecard = jasmine.createSpyObj("scorecard",['newFrame']);
    frame = jasmine.createSpyObj("frame",['newRoll', 'isLastRoll', 'calculateScores']);
    game = new Game(scorecard, frame);
  })

  it("has a scorecard and current frame upon creation", () => {
    expect(game.scorecard).toEqual(scorecard);
    expect(game.currentFrame).toEqual(frame);
  })

  it("can receive a roll", () => {
    game.roll(6);
    expect(frame.newRoll).toHaveBeenCalledWith(6);
  })

  it("sends the first frame to scorecard", () => {
    expect(scorecard.newFrame).toHaveBeenCalledWith(frame);
  })

  describe("has multiple rolls", () => {
    beforeEach(() => {
      frame.isLastRoll.and.returnValue(true);
    })

    it("sets a new frame after two rolls", () => {
      game.roll(3);
      expect(frame.newRoll).toHaveBeenCalledWith(3)
      expect(game.currentFrame).not.toEqual(frame);
      expect(scorecard.newFrame).toHaveBeenCalledWith(game.currentFrame);
      expect(frame.calculateScores).toHaveBeenCalled();
    })
  })
})
