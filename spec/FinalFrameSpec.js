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

    xit("does not end the frame after a spare", () => {
      for (let i = 0; i < 2; i++) {
        finalFrame.add(5);
      }
      expect(finalFrame.isEnded()).toBe(false);
    });

    xit("does not end the frame after a strike", () => {
      finalFrame.add(10);

      expect(finalFrame.isEnded()).toBe(false);
    });
    
    xit("does not end the frame after 2 strikes", () => {
      for (let i = 0; i < 2; i++) {
        finalFrame.add(10);
      }

      expect(finalFrame.isEnded()).toBe(false);
    });

    xit("it ends the frame after 3 rolls", () => {
      for (let i = 0; i < 3; i++) {
        finalFrame.add(5);
      }

      expect(finalFrame.isEnded()).toBe(true);
    });
  });

  describe("add()", () => {
    it("can store rolls", () => {
      finalFrame.add(2);

      expect(finalFrame.pins(1)).toEqual(2);
    });

    it("can store a second roll", () => {
      finalFrame.add(2);
      finalFrame.add(3);

      expect(finalFrame.pins(2)).toEqual(3);
    });

    it("can store a third roll", () => {
      for (let i = 0; i < 3; i++) {
        finalFrame.add(5);
      }

      expect(finalFrame.pins(3)).toEqual(5);
    });
  });

  describe("score()", () => {
    it("can score a frame with 2 rolls", () => {
      for (let i = 0; i < 2; i++) {
        finalFrame.add(1);
      }

      expect(finalFrame.score()).toEqual(2);
    });

    it("can score a frame of all strikes", () => {
      for (let i = 0; i < 3; i++) {
        finalFrame.add(10);
      }

      expect(finalFrame.score()).toEqual(30);
    });
  });

});