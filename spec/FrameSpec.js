"use strict";

describe("Frame", () => {
  let frame;

  beforeEach(() => {
    frame = new Frame();
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
      expect(frame.isLastRoll()).toEqual(false)
    })
  })
})
