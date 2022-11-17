const BowlingScoring = require('./bowlingScoring');

describe('BowlingScoring', () => {

  describe('after the first frame', () => {
    it('returns a score without a spare or strike', () => {
      const scorecard = new BowlingScoring([[2, 3]]);
      expect(scorecard.calculate()).toEqual(5);
    });
  });

});