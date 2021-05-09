"use strict";

describe("Frame", () => {
  let frame;
  beforeEach(() => {
    frame = new Frame();
  });
  
  describe("has value into the array", () => {
    it("should return an empty array", () => {
      expect(frame.getRolls()).toEqual([])
    });

    it("allows to add rolls into the array", () => {
      frame.addRoll(2);
      frame.addRoll(5);
      expect(frame.rolls).toEqual([2, 5]);
    });
  });
  describe("score", () => {
    it("it return 0 by default", () => {
      expect(frame.getScore()).toEqual(0);
    });
    it("should return a score", () => {
      frame.addRoll(5);
      frame.addRoll(1);
      expect(frame.getScore()).toEqual(6);
    });
  });
  
  it("should return a strike", () => {
    frame.addRoll(10);
    expect(frame.isStrike()).toBe(true);
  });
  it("should return a spare", () => {
    frame.addRoll(5);
    frame.addRoll(5);
    expect(frame.isSpare()).toBe(true);
  });
});
