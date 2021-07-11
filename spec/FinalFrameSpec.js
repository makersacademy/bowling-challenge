'use strict';

describe("FinalFrame", () => {
  let finalFrame;

  beforeEach( () => {
    finalFrame = new FinalFrame();
  });

  describe("isEnded()", () => {
    it("is not true by default", () => {
      expect(finalFrame.isEnded()).not.toBe(true);
    });
  });

});