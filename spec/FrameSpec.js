"use strict";

describe("Frame", () => {
  let frame;
  let previousFrame;

  beforeEach(() => {
    frame = new Frame();
    previousFrame = new Frame();
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
      frame.calculateScore([]);
      expect(frame.accumulativeScore).toEqual(6)
    })
  })

  describe("when not the 1st frame", () => {
    beforeEach(() => {
      for(let i = 0; i < 2; i++) previousFrame.newRoll(3);
      previousFrame.calculateScore([previousFrame]);
    })

    it("calculates accumulative score", () => {
      for(let i = 0; i < 2; i++) frame.newRoll(3);
      frame.calculateScore([previousFrame, frame]);
      expect(frame.accumulativeScore).toEqual(12)
    })
  })
})
