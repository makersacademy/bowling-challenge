'use strict';

describe("Frame", () => {
  let frame;

  beforeEach( () => {
    frame = new Frame();
  });

  describe("isEnded()", () => {
    it("is not true by default", () => {
      expect(frame.isEnded()).not.toBe(true);
    });

    it("can be ended after 2 rolls", () => {
      for (let i = 0; i < 2; i++) {
        frame.add(1);
      }
      expect(frame.isEnded()).toBe(true);
    });

    it("can be ended with a strike in 1 roll", () => {
      frame.add(10);

      expect(frame.isEnded()).toBe(true);
    });
  });

  describe("add()", () => {
    it("can store rolls", () => {
      frame.add(2);

      expect(frame.pins(1)).toEqual(2);
    });

    it("can store a second roll", () => {
      frame.add(2);
      frame.add(3);

      expect(frame.pins(2)).toEqual(3);
    });
  });
  
  describe("score()", () => {
    it("can score a frame", () => {
      for (let i = 0; i < 2; i++) {
        frame.add(1);
      }

      expect(frame.score()).toEqual(2);
    });
  });

  describe("isStrike", () => {
    it("can identify a strike", () => {
      frame.add(10);

      expect(frame.isStrike()).toBe(true);
    });
  });

  describe("isSpare", () => {
    it("can identify a spare", () => {
      for (let i = 0; i < 2; i++) {
        frame.add(5);
      }

      expect(frame.isSpare()).toBe(true);
    });
  });
});