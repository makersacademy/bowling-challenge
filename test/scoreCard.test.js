const ScoreCard = require("../lib/scorecard");
const Frame = require("../lib/frame");

describe("Score Card Class", () => {
  describe("add frame function", () => {
    const frameDouble = {};
    it("allows a frame to be added", () => {
      const scorecard = new ScoreCard();
      scorecard.addFrame(frameDouble);
      expect(scorecard.getFrames()).toContain(frameDouble);
    });
  });

  describe("calculate score function", () => {
    it("calculates score for a single frame", () => {
      const frameDouble = { getFrameScore: () => 9 };
      const scorecard = new ScoreCard();
      scorecard.addFrame(frameDouble);
      expect(scorecard.calculateScore()).toBe(9);
    });

    it("calculates score for two frames", () => {
      const frameDouble1 = {
        getFrameScore: () => 7,
        isSpare: () => false,
        isStrike: () => false,
      };
      const frameDouble2 = {
        getFrameScore: () => 6,
        isSpare: () => false,
        isStrike: () => false,
      };
      const scorecard = new ScoreCard();
      scorecard.addFrame(frameDouble1);
      scorecard.addFrame(frameDouble2);
      expect(scorecard.calculateScore()).toBe(13);
    });

    it("calculates score for five frames", () => {
      const frameDouble1 = {
        getFrameScore: () => 0,
        isSpare: () => false,
        isStrike: () => false,
      };
      const frameDouble2 = {
        getFrameScore: () => 1,
        isSpare: () => false,
        isStrike: () => false,
      };
      const frameDouble3 = {
        getFrameScore: () => 2,
        isSpare: () => false,
        isStrike: () => false,
      };
      const frameDouble4 = {
        getFrameScore: () => 4,
        isSpare: () => false,
        isStrike: () => false,
      };
      const frameDouble5 = {
        getFrameScore: () => 5,
        isSpare: () => false,
        isStrike: () => false,
      };
      const scorecard = new ScoreCard();
      scorecard.addFrame(frameDouble1);
      scorecard.addFrame(frameDouble2);
      scorecard.addFrame(frameDouble3);
      scorecard.addFrame(frameDouble4);
      scorecard.addFrame(frameDouble5);
      expect(scorecard.calculateScore()).toBe(12);
    });

    it("calculates score for multiple frames including strikes and spares", () => {
      const frameDouble1 = { getFrameScore: () => 14 };
      const frameDouble2 = { getFrameScore: () => 8 };
      const frameDouble3 = { getFrameScore: () => 9 };
      const frameDouble4 = { getFrameScore: () => 16 };
      const frameDouble5 = { getFrameScore: () => 6 };
      const scorecard = new ScoreCard();
      scorecard.addFrame(frameDouble1);
      scorecard.addFrame(frameDouble2);
      scorecard.addFrame(frameDouble3);
      scorecard.addFrame(frameDouble4);
      scorecard.addFrame(frameDouble5);
      expect(scorecard.calculateScore()).toBe(53);
    });
  });
});
