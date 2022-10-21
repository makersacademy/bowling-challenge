const GameScore = require('./lib/GameScore');

describe('gamescore', () => {
  describe('addFrameScore', () => {
    it("adds the current frame's pins to the frameScores array", () => {
      let gameScore = new GameScore();
      const fakeFrame = {
        framePins: () => [2, 5],
        isStrike: () => false,
        isSpare: () => false,
      };
      gameScore.addFrameScore(fakeFrame);

      expect(gameScore.frameScores).toStrictEqual([7]);
    });

    it("adds two different frames' pins to the frameScores array", () => {
      let gameScore = new GameScore();
      const fakeFrame1 = {
        framePins: () => [2, 5],
        isStrike: () => false,
        isSpare: () => false,
      };
      const fakeFrame2 = {
        framePins: () => [10],
        isStrike: () => true,
        isSpare: () => false,
      };
      gameScore.addFrameScore(fakeFrame1);
      gameScore.addFrameScore(fakeFrame2);

      expect(gameScore.frameScores).toStrictEqual([7, 10]);
    });

    it('adds the bonus points when strike', () => {
      let gameScore = new GameScore();
      const fakeFrame1 = {
        framePins: () => [10],
        isStrike: () => true,
        isSpare: () => false,
      };

      const fakeFrame2 = {
        framePins: () => [2, 5],
        isStrike: () => false,
        isSpare: () => false,
      };

      gameScore.addFrameScore(fakeFrame1);
      gameScore.addFrameScore(fakeFrame2);

      expect(gameScore.frameScores).toStrictEqual([17, 7]);
    });
  });
});
