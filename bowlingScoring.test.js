const BowlingScoring = require('./bowlingScoring');

describe('BowlingScoring', () => {

  describe('after the first frame', () => {
    it('returns a score without a spare or strike', () => {
      const scorecard = new BowlingScoring([[2, 3]]);
      expect(scorecard.calculate()).toEqual(5);
    });
  });

  describe('after the second frame', () => {
    it('returns total score without a spare or strike', () => {
      const scorecard = new BowlingScoring([[2, 3], [2, 5]]);
      expect(scorecard.calculate()).toEqual(12);
    });

    it('returns total score with a spare in 1st frame', () => {
      const scorecard = new BowlingScoring([[2, 8], [2, 5]]);
      expect(scorecard.calculate()).toEqual(19);
    });
  });

});