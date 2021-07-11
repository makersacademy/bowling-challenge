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
});