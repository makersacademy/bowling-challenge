const Scorecard = require('../lib/scorecard');

describe("Scorecard", () => {
  it("has an empty array of frames when created", () => {
    const card = new Scorecard;
    expect(card.getFrames()).toEqual([]);
  });

  describe("addFrame", () => {
    it("adds a new frame to the frames array with the rolls", () => {
      const card = new Scorecard;
      const mockFrame = {
        addFirstRoll: () => undefined,
        addSecondRoll: () => undefined,
        getFirstRoll: () => 3,
        getSecondRoll: () => 6
      }
      card.addFrame(3, 6, mockFrame);
      expect(card.getFrames()).toEqual([[3,6]]);
    });
  });

  describe("frameScore", () => {
    it("calculates the score of a simple frame", () => {
      const card = new Scorecard;
      const mockFrame = {
        addFirstRoll: () => undefined,
        addSecondRoll: () => undefined,
        getFirstRoll: () => 3,
        getSecondRoll: () => 6
      }
      card.addFrame(3, 6, mockFrame);
      expect(card.frameScore(card.frames[0])).toEqual(9);
    });
  });

  describe("gameScore", () => {
    it("calculates the score of a simple two frame game", () => {
      const card = new Scorecard;
      const mockFrameOne = {
        addFirstRoll: () => undefined,
        addSecondRoll: () => undefined,
        getFirstRoll: () => 3,
        getSecondRoll: () => 6
      }
      const mockFrameTwo = {
        addFirstRoll: () => undefined,
        addSecondRoll: () => undefined,
        getFirstRoll: () => 4,
        getSecondRoll: () => 2
      }
      card.addFrame(3, 6, mockFrameOne);
      card.addFrame(4, 2, mockFrameTwo);
      expect(card.gameScore()).toEqual(15);
    });
  });
});