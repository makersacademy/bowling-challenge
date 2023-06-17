const Gameplay = require("./gameplay");
const Frame = require("./frame");

describe("Gameplay", () => {
  beforeEach(() => {
    game = new Gameplay();
  });

  describe(".continue", () => {
    it("returns true if the game should continue", () => {
      const frame1 = new Frame();
      const frames = { 1: frame1 };

      expect(game.checkContinue(frames)).toBe(true);
    });
  });

  describe(".incrementBall", () => {
    it("increments the current ball and frame", () => {
      const frame1 = new Frame();
      frame1.setBallScore(1, 3);
      frame1.setBallScore(2, 4);

      const frame2 = new Frame();
      frame2.setStrike(1);

      const frame3 = new Frame();
      frame3.setBallScore(1, 2);

      const frames = { 1: frame1, 2: frame2, 3: frame3 };

      expect(game.currentFrame).toBe(1);
      expect(game.currentBall).toBe(1);

      game.setNextBall(frames);
      expect(game.currentFrame).toBe(1);
      expect(game.currentBall).toBe(2);

      game.setNextBall(frames);
      expect(game.currentFrame).toBe(2);
      expect(game.currentBall).toBe(1);

      game.setNextBall(frames);
      expect(game.currentFrame).toBe(3);
      expect(game.currentBall).toBe(1);
    });
  });

  describe(".processCurrentBall", () => {
    it("processes input and modifies the current ball", () => {
      const frame1 = new Frame();
      game.processCurrentBall(frame1, "X");
      expect(frame1.getStrike()).toBe(true);
      expect(frame1.frameScore()).toBe(10);

      const frame2 = new Frame();
      game.processCurrentBall(frame2, "4");
      expect(frame2.getBallScore(1)).toBe(4);
      game.processCurrentBall(frame2, "/");
      expect(frame2.frameScore()).toBe(10);
    });
  });

  describe(".getFinalScore", () => {
    it("returns the final score for the game", () => {
      const frame1 = new Frame();
      frame1.setStrike(1);

      const frame2 = new Frame();
      frame2.setStrike(1);

      const frame3 = new Frame();
      frame3.setBallScore(1, 5);

      const frames = { 1: frame1, 2: frame2, 3: frame3 };

      expect(game.getFinalScore(frames)).toBe(25);
    });
  });
});
