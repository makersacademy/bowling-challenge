"use strict";

describe("Frame", () => {
  let frame;
  beforeEach(function () {
    frame = new Frame();
  });

  it("begins each frame with a score of 0", () => {
    expect(frame.currentScore()).toEqual(0);
  });

  it("begins each frame with no rolls", () => {
    expect(frame.rolls).toEqual([]);
  });

  it("updates its roll scores", () => {
    frame.updateRollScore(2);
    frame.updateRollScore(2);

    expect(frame.rolls).toEqual([2, 2]);
  });
  describe("NORMAL SCORING", () => {
    it("knows when not eligible for eligible for a bonus", () => {
      expect(frame.bonusStatus).toEqual(null)
      expect(frame.bonusScore).toEqual(0)

      frame.updateRollScore(1);
      frame.updateRollScore(8);
  
      expect(frame.bonusStatus).toEqual(null)
      expect(frame.bonusScore).toEqual(0)
    });

    it("updates the frame score for normal scoring", () => {
      frame.updateRollScore(3);
      frame.updateRollScore(3);
  
      expect(frame.currentScore()).toEqual(6);
    });
  })
  
  describe("SPARE", () => {
    it("knows when eligible for a spare", () => {
      expect(frame.isSpare()).toBe(false)
      frame.updateRollScore(1);
      frame.updateRollScore(9);
  
      expect(frame.isSpare()).toBe(true)
    });
   })

   describe("STRIKE", () => {
    it("knows when eligible for a strike", () => {
      expect(frame.isStrike()).toBe(false)
      frame.updateRollScore(10);
      console.log(frame)
  
      expect(frame.isStrike()).toBe(true)
    });
   })

});
