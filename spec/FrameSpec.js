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
});