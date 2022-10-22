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

    it('adds the bonus points when strike on the last round', () => {
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

    it('adds the bonus points when tree strikes on a row', () => {
      let gameScore = new GameScore();
      const fakeFrame1 = {
        framePins: () => [10],
        isStrike: () => true,
        isSpare: () => false,
      };

      const fakeFrame2 = {
        framePins: () => [10],
        isStrike: () => true,
        isSpare: () => false,
      };

      const fakeFrame3 = {
        framePins: () => [4, 2],
        isStrike: () => false,
        isSpare: () => false,
      };

      gameScore.addFrameScore(fakeFrame1);
      gameScore.addFrameScore(fakeFrame2);
      gameScore.addFrameScore(fakeFrame3);

      expect(gameScore.frameScores).toStrictEqual([24, 16, 6]);
    });

    it('adds the bonus points when tree strikes on a row', () => {
      let gameScore = new GameScore();
      const fakeFrame1 = {
        framePins: () => [10],
        isStrike: () => true,
        isSpare: () => false,
      };

      const fakeFrame2 = {
        framePins: () => [10],
        isStrike: () => true,
        isSpare: () => false,
      };

      const fakeFrame3 = {
        framePins: () => [10],
        isStrike: () => true,
        isSpare: () => false,
      };

      const fakeFrame4 = {
        framePins: () => [2, 5],
        isStrike: () => false,
        isSpare: () => false,
      };

      gameScore.addFrameScore(fakeFrame1);
      gameScore.addFrameScore(fakeFrame2);
      gameScore.addFrameScore(fakeFrame3);
      gameScore.addFrameScore(fakeFrame4);

      expect(gameScore.frameScores).toStrictEqual([30, 22, 17, 7]);
    });

    it('adds the bonus points when spare on the last round', () => {
      let gameScore = new GameScore();
      const fakeFrame1 = {
        framePins: () => [6, 4],
        isStrike: () => false,
        isSpare: () => true,
      };

      const fakeFrame2 = {
        framePins: () => [5, 2],
        isStrike: () => false,
        isSpare: () => false,
      };

      gameScore.addFrameScore(fakeFrame1);
      gameScore.addFrameScore(fakeFrame2);

      expect(gameScore.frameScores).toStrictEqual([15, 7]);
    });

    describe('calcTotalPoints', () => {
      it('returns the correct number of total points', () => {
        let gameScore = new GameScore();
        const fakeFrame1 = {
          framePins: () => [6, 4],
          isStrike: () => false,
          isSpare: () => true,
        };

        const fakeFrame2 = {
          framePins: () => [5, 2],
          isStrike: () => false,
          isSpare: () => false,
        };

        gameScore.addFrameScore(fakeFrame1);
        gameScore.addFrameScore(fakeFrame2);

        expect(gameScore.calcTotalPoints()).toEqual(22);
      });
    });
  });
});
