"use strict";

describe("Scorecard", () => {
  let scorecard;
  beforeEach(() => {
    scorecard = new Scorecard();
  });

  it("begins game with a score of 0", () => {
    expect(scorecard.currentScore()).toEqual(0);
  });

  it("begins the game at Frame 1: Roll 1", () => {
    expect(scorecard.currentFrame()).toEqual(1);
    expect(scorecard.currentRoll()).toEqual(1);
  });

  it("passes the correct frame a roll score", () => {
    const frame = jasmine.createSpyObj("frame", ["updateRollScore", "rolls", "isSpare", "isStrike"]);
    scorecard.frames[0] = frame;
    scorecard.enterRollPins(2);

    expect(frame.updateRollScore).toHaveBeenCalledWith(2);

    scorecard.frame = 2;
    expect(scorecard.frames[1].rolls).toEqual([]);
    scorecard.enterRollPins(3);
    expect(scorecard.frames[1].rolls).toEqual([3]);
    expect(scorecard.frames[2].rolls).toEqual([]);
  });

  it("limits the game to 10 frames", () => {
    expect(scorecard.isGameOver()).toBe(false);
    scorecard.play = null; // todo: use loop to throw ten frames

    expect(scorecard.isGameOver()).toBe(true);
  });

  describe("NORMAL SCORING", () => {
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
  
  describe("SPARE SCORING", () => {
    it("passes the correct frame a bonus score", () => {
      scorecard.enterRollPins(2);
      scorecard.enterRollPins(8);
      expect(scorecard.frames[0].isSpare()).toBe(true)
      scorecard.enterRollPins(3);

      expect(scorecard.frames[0].currentScore()).toEqual(13)
      expect(scorecard.currentScore()).toEqual(16)
    })
  })

  describe("STRIKE SCORING", () => {
    it("passes the correct frame a bonus score", () => {
      scorecard.enterRollPins(10);
      expect(scorecard.frame).toEqual(2);
      expect(scorecard.roll).toEqual(1);
      expect(scorecard.frames[0].isStrike()).toBe(true)
      scorecard.enterRollPins(7);
      scorecard.enterRollPins(1);

      expect(scorecard.frames[0].currentScore()).toEqual(18)
      expect(scorecard.currentScore()).toEqual(26)
    })

    it("does it twice in a row", () => {
      scorecard.enterRollPins(10);
      expect(scorecard.frame).toEqual(2);
      expect(scorecard.roll).toEqual(1);
      expect(scorecard.frames[0].isStrike()).toBe(true)
      scorecard.enterRollPins(10);
      expect(scorecard.frame).toEqual(3);
      expect(scorecard.roll).toEqual(1);

      expect(scorecard.frames[0].currentScore()).toEqual(20)
      expect(scorecard.currentScore()).toEqual(30)
    })
    it("does it twice in a row and a bit more", () => {
      scorecard.enterRollPins(10);
      scorecard.enterRollPins(10);
      scorecard.enterRollPins(1);
      scorecard.enterRollPins(2);

      expect(scorecard.frames[0].currentScore()).toEqual(21)
      expect(scorecard.frames[1].currentScore()).toEqual(13)
      expect(scorecard.frames[2].currentScore()).toEqual(3)
    })
  })
});
