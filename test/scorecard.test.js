const Scorecard = require('../lib/scorecard');

describe("Scorecard", () => {
  it("has an empty array of frames when created", () => {
    const card = new Scorecard;
    expect(card.getFrames()).toEqual([]);
  });

  const mockFrameOne = {
    addFirstRoll: () => undefined,
    addSecondRoll: () => undefined,
    getFirstRoll: () => 3,
    getSecondRoll: () => 6,
    pins: () => 9,
    isSpare: () => false,
    isStrike: () => false
  }

  const mockFrameTwo = {
    addFirstRoll: () => undefined,
    addSecondRoll: () => undefined,
    getFirstRoll: () => 4,
    getSecondRoll: () => 2,
    pins: () => 6,
    isSpare: () => false,
    isStrike: () => false
  }

  const mockFrameSpare = {
    addFirstRoll: () => undefined,
    addSecondRoll: () => undefined,
    getFirstRoll: () => 3,
    getSecondRoll: () => 7,
    pins: () => 10,
    isSpare: () => true,
    isStrike: () => false
  }

  const mockFrameStrike = {
    addFirstRoll: () => undefined,
    addSecondRoll: () => undefined,
    getFirstRoll: () => 10,
    getSecondRoll: () => null,
    pins: () => 10,
    isSpare: () => false,
    isStrike: () => true
  }

  describe("getFrames", () => {
    it("displays a / for a spare", () => {
      const card = new Scorecard;
      card.addFrame(3, 7, mockFrameSpare);
      expect(card.getFrames()).toEqual([[3,"/"]]);
    });

    it("displays a X for a strike", () => {
      const card = new Scorecard;
      card.addFrame(10, null, mockFrameStrike);
      expect(card.getFrames()).toEqual([["X"]]);
    });
  });

  describe("addFrame", () => {
    it("adds a new frame to the frames array with the rolls", () => {
      const card = new Scorecard;
      card.addFrame(3, 6, mockFrameOne);
      expect(card.getFrames()).toEqual([[3,6]]);
    });
  });

  describe("frameScore", () => {
    it("calculates the score of a simple frame", () => {
      const card = new Scorecard;
      card.addFrame(3, 6, mockFrameOne);
      expect(card.frameScore(0)).toEqual(9);
    });

    it("calculates the score of a frame with a spare", () => {
      const card = new Scorecard;
      card.addFrame(3, 7, mockFrameSpare);
      card.addFrame(4, 2, mockFrameTwo);
      expect(card.frameScore(0)).toEqual(14);
    });

    it("calculates the score of a frame with a strike", () => {
      const card = new Scorecard;
      card.addFrame(10, null, mockFrameStrike);
      card.addFrame(4, 2, mockFrameTwo);
      expect(card.frameScore(0)).toEqual(16);
    });

    it("calculates the frame score for consecutive strikes", () => {
      const card = new Scorecard;
      card.addFrame(10, null, mockFrameStrike);
      card.addFrame(10, null, mockFrameStrike);
      card.addFrame(3, 6, mockFrameOne);
      expect(card.frameScore(0)).toEqual(23);
    });
  });

  describe("gameScore", () => {
    it("calculates the score of a simple two frame game", () => {
      const card = new Scorecard;
      card.addFrame(3, 6, mockFrameOne);
      card.addFrame(4, 2, mockFrameTwo);
      expect(card.gameScore()).toEqual(15);
    });

    it("calculates the score of a perfect game", () => {
      const card = new Scorecard;
      for (i = 0; i < 12; i++) {
        card.addFrame(10, null, mockFrameStrike);
      }
      expect(card.gameScore()).toEqual(300);
    });
  });
});