"use strict";

describe("Scorecard", () => {
  let scorecard;
  beforeEach(function () {
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
    const frame = jasmine.createSpyObj("frame", ["updateRollScore"]);
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
    scorecard.frame = 11;

    expect(scorecard.isGameOver()).toBe(true);
  });
});
