const GameScore = require('./gamescore');

describe('gamescore', () => {
  describe('addFrame', () => {
    it("adds the current frame's pins to the frameScores array", () => {
      let gameScore = new GameScore();
      const fakeFrame = {
        framePins: () => [2, 5],
        isStrike: () => false,
        isSpare: () => false,
      };
      gameScore.addFrame(fakeFrame);

      expect(gameScore.frameScores).toStrictEqual([7]);
    });
  });
});
