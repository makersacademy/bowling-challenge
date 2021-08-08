"use strict";

describe("Frame", () => {
  let frame;
  let previousFrame;
  let twoFramesBefore;

  beforeEach(() => {
    frame = new Frame();
    previousFrame = new Frame();
    twoFramesBefore = new Frame();
  })

  it("records a roll", () => {
    frame.newRoll(6)
    expect(frame.rolls).toEqual([6])
  })

  it("throws error when more than 10 is entered to a frame", () => {
    frame.newRoll(4);
    expect(() => { frame.newRoll(7); }).toThrowError("Cannot enter more than 10 in a single frame.");
    expect(frame.rolls).toEqual([4]);
  })

  describe("isLastRoll", () => {
    it("returns true if last roll has been taken", () => {
      for(let i = 0; i < 2; i++) frame.newRoll(3);
      expect(frame.isLastRoll()).toEqual(true)
    })

    it("returns false if last roll has not been taken", () => {
      frame.newRoll(3);
      expect(frame.isLastRoll()).toEqual(false)
    })

    it("returns true if first roll is a strike", () => {
      frame.newRoll(10);
      expect(frame.isLastRoll()).toEqual(true)
    })
  })

  describe("on 1st frame", () => {
    it("calculates accumulative score", () => {
      for(let i = 0; i < 2; i++) frame.newRoll(3);
      frame.calculateScores([]);
      expect(frame.accumulativeScore).toEqual(6)
    })
  })

  describe("when not the 1st frame", () => {
    beforeEach(() => {
      for(let i = 0; i < 2; i++) previousFrame.newRoll(3);
      previousFrame.calculateScores([previousFrame]);
    })

    it("calculates accumulative score", () => {
      for(let i = 0; i < 2; i++) frame.newRoll(3);
      frame.calculateScores([previousFrame, frame]);
      expect(frame.accumulativeScore).toEqual(12)
    })
  })

  describe("when spare before", () => {
    beforeEach(() => {
      for(let i = 0; i < 2; i++) previousFrame.newRoll(5);
      previousFrame.calculateScores([previousFrame]);
    })

    it("addes bonus to previous spare", () => {
      frame.newRoll(3);
      frame.calculateScores([previousFrame, frame]);
      expect(previousFrame.accumulativeScore).toEqual(13)
    })
  })

  describe("when strike before", () => {
    beforeEach(() => {
      previousFrame.newRoll(10);
      previousFrame.calculateScores([previousFrame]);
    })

    it("addes bonus to previous strike", () => {
      for(let i = 0; i < 2; i++) frame.newRoll(3);
      frame.calculateScores([previousFrame, frame]);
      expect(previousFrame.accumulativeScore).toEqual(16)
    })
  })

  describe("when a double is rolled", () => {
    beforeEach(() => {
      twoFramesBefore.newRoll(10);
      twoFramesBefore.calculateScores([twoFramesBefore]);
      previousFrame.newRoll(10);
      previousFrame.calculateScores([twoFramesBefore, previousFrame]);
    })

    it("addes bonus to previous strikes", () => {
      for(let i = 0; i < 2; i++) {
        frame.newRoll(3);
        frame.calculateScores([twoFramesBefore, previousFrame, frame]);
      }
      expect(previousFrame.accumulativeScore).toEqual(39)
      expect(twoFramesBefore.accumulativeScore).toEqual(23)
    })
  })
})
