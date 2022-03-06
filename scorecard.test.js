const Scorecard = require('./scorecard');

describe('scorecard', () => {
  let scorecard;

  beforeEach(() => {
    scorecard = new Scorecard();
  });

  describe('score', () => {
    it('can roll a gutter game', () => {
      for (let i = 0; i < 20; i++) {
        scorecard.roll(0);
      }
      expect(scorecard.score()).toBe(0);
    });

    it('should return 0 for a game of all zeros', () => {
      for (let i = 0; i < 20; i++) {
        scorecard.roll(0);
      }
      expect(scorecard.score()).toEqual(0);
    });
  });
});