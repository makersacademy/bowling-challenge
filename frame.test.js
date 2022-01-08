const { hasUncaughtExceptionCaptureCallback } = require('process');
const Frame = require('./frame')

let frame = new Frame();

describe("Frame", () => {

  describe("#roll", () => {
    it("should be able to record a roll", () => {
      frame.roll(1);
      expect(frame.getRolls()[0]).toBe(1);
    })
    it("should be able to record two rolls", () => {
      frame.roll(2);
      expect(frame.getRolls()[1]).toBe(2);
    })
  })

  describe("#getTotal", () => {
    it("should be able to calculate the sum of all the rolls", () => {
      expect(frame.getTotal()).toBe(3);
    })
  })

  describe("#isStrike", () => {
    it("should be able to know if it is a strike", () => {
      frame = new Frame();
      frame.roll(10);
      expect(frame.isStrike()).toBe(true);
    })
  })

  describe("#isSpare", () => {
    it("should be able to know if it is a spare", () => {
      frame = new Frame();
      frame.roll(1);
      frame.roll(9);
      expect(frame.isSpare()).toBe(true);
    })
    it("should not identify a strike as a spare", () => {
      frame = new Frame();
      frame.roll(10);
      expect(frame.isSpare()).toBe(false);
    })
  })

  describe("#isComplete", () => {
    it("should know when it is complete (vanilla frame)", () => {
      frame = new Frame();
      frame.roll(2);
      frame.roll(3);
      expect(frame.isComplete()).toBe(true);
    })
    it("should know when it is complete (strike)", () => {
      frame = new Frame();
      frame.roll(10);
      expect(frame.isComplete()).toBe(true);
    })
  })

  describe("#addBonus", () => {
    it("should be able to add bonus points", () => {
      frame = new Frame();
      frame.addBonus(10);
      expect(frame.getBonus()).toBe(10);
    })
  })
})