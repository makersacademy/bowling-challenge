const ScoreCard = require("./scorecard");
const Frame = require("./frame");

describe("ScoreCard", () => {
  describe("Update pending strikes", () => {
    beforeEach(() => {
      scoreCard = new ScoreCard();
    });

    it("updates the bonus for currentFrame-1 if two balls have been played in this frame", () => {
      const frame1 = new Frame();
      frame1.setStrike(1);

      const frame2 = new Frame();
      frame2.setBallScore(1, 3);
      frame2.setBallScore(2, 4);

      const frames = { 1: frame1, 2: frame2 };
      const currentFrame = 2;

      scoreCard.updatePendingBonuses(frames, currentFrame);

      expect(frame1.totalFrameScore()).toBe(17);
    });

    it("updates the bonus for currentFrame-2 if current_frame and currentFrame-1 are strikes", () => {
      const frame1 = new Frame();
      frame1.setStrike(1);

      const frame2 = new Frame();
      frame2.setStrike(1);

      const frame3 = new Frame();
      frame3.setStrike(1);

      const frames = { 1: frame1, 2: frame2, 3: frame3 };
      const currentFrame = 3;

      scoreCard.updatePendingBonuses(frames, currentFrame);
      expect(frame1.totalFrameScore()).toBe(30);
    });

    it("updates the bonus for frame 9 if frame 9 had a strike and the first two balls of frame 10 are strikes", () => {
      const frame8 = new Frame();

      const frame9 = new Frame();
      frame9.setStrike(1);

      const frame10 = new Frame();
      frame10.setStrike(1);
      frame10.setStrike(2);

      const frames = { 8: frame8, 9: frame9, 10: frame10 };
      const currentFrame = 10;

      scoreCard.updatePendingBonuses(frames, currentFrame);
      expect(frame9.totalFrameScore()).toBe(30);
    });

    it("doesn't apply a bonus if ball 3 of frame 10 is a strike", () => {
      const frame8 = new Frame();

      const frame9 = new Frame();
      frame9.setStrike(1);

      const frame10 = new Frame();
      frame10.setStrike(1);
      frame10.setStrike(2);

      const frames = { 8: frame8, 9: frame9, 10: frame10 };
      const currentFrame = 10;

      scoreCard.updatePendingBonuses(frames, currentFrame);
      expect(frame9.totalFrameScore()).toBe(30);
      expect(frame10.totalFrameScore()).toBe(20);

      frame10.setStrike(3);
      scoreCard.updatePendingBonuses(frames, currentFrame);

      expect(frame9.totalFrameScore()).toBe(30);
      expect(frame10.totalFrameScore()).toBe(30);
    });
  });
  describe("Update pending spares", () => {
    beforeEach(() => {
      scoreCard = new ScoreCard();
    });

    it("updates the bonus for currentFrame-1 if it had a spare", () => {
      const frame1 = new Frame();
      frame1.setBallScore(1, 3);
      frame1.setSpare();

      const frame2 = new Frame();
      frame2.setBallScore(1, 5);

      const frames = { 1: frame1, 2: frame2 };
      const currentFrame = 2;

      scoreCard.updatePendingBonuses(frames, currentFrame);

      expect(frame1.totalFrameScore()).toBe(15);
    });
  });
});
