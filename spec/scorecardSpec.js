"use strict";

describe("Scorecard", () => {
  let scorecard;
  beforeEach(() => {
    scorecard = new Scorecard();
  });

  it("begins the 10 frame game with a score of 0", () => {
    expect(scorecard.framesArray().length).toEqual(10);
    expect(scorecard.currentScore()).toEqual(0);
  });

  it("begins the game at Frame 1: Roll 1", () => {
    expect(scorecard.currentFrame()).toEqual(1);
    expect(scorecard.currentRoll()).toEqual(1);
  });

  it("passes the correct frame a roll score", () => {
    const frame = jasmine.createSpyObj("frame", ["updateRollScore", "rolls"]);
    scorecard.frames[0] = frame;
    scorecard.enterRollPins(2);

    expect(frame.updateRollScore).toHaveBeenCalledWith(2);

    scorecard.frame = 2;
    expect(scorecard.frames[1].rolls).toEqual([]);
    scorecard.enterRollPins(2);
    expect(scorecard.frames[1].rolls).toEqual([2]);
    expect(scorecard.frames[2].rolls).toEqual([]);
  });

  it("limits the game to 10 frames", () => {
    expect(scorecard.isGameOver()).toBe(false);
    scorecard.play = null;

    expect(scorecard.isGameOver()).toBe(true);
  });

  describe("for non-bonus scoring throws", () => {
    it("advances to next roll", () => {
      expect(scorecard.currentRoll()).toEqual(1);
      scorecard.enterRollPins(2);
      expect(scorecard.currentRoll()).toEqual(2);
    });

    it("advances to next frame", () => {
      expect(scorecard.currentFrame()).toEqual(1);
      scorecard.enterRollPins(2);
      scorecard.enterRollPins(2);
      expect(scorecard.currentFrame()).toEqual(2);
    });

    it("starts each frame at roll 1", () => {
      expect(scorecard.currentFrame()).toEqual(1);
      scorecard.enterRollPins(2);
      scorecard.enterRollPins(2);
      expect(scorecard.currentFrame()).toEqual(2);
      expect(scorecard.currentRoll()).toEqual(1);
    });
  });
});
