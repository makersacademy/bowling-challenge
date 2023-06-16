const ScoreCard = require("./scorecard");
const Frame = require("./frame");

describe("ScoreCard", () => {
  describe("Update pending strikes", () => {
    beforeEach(() => {
      scoreCard = new ScoreCard();
    });

    it("updates the bonus for current_frame-1 if two balls have been played in this frame", () => {
      const frame1 = new Frame();
      frame1.setStrike();

      const frame2 = new Frame();
      frame2.setBallScore(1, 3);
      frame2.setBallScore(2, 4);

      const frames = { 1: frame1, 2: frame2 };
      const currentFrame = 2;

      scoreCard.updatePendingBonuses(frames, currentFrame);

      expect(frame1.totalFrameScore()).toBe(17);
    });
  });
});
