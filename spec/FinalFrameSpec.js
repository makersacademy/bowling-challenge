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

    it("is ended after 2 rolls if no strike or spare", () => {
      for (let i = 0; i < 2; i++) {
        finalFrame.add(1);
      }
      expect(finalFrame.isEnded()).toBe(true);
    });
  });
  

});