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
});