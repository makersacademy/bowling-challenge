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

    it('returns total score with a strike in 1st frame', () => {
      const scorecard = new BowlingScoring([[10, 0], [1, 5]]);
      expect(scorecard.calculate()).toEqual(22);
    })
  });

  describe('after 9 frames', () => {
    it('returns correct total score with no spares or strikes', () => {
      const scorecard = new BowlingScoring([[8, 1], [2, 7], [3, 6], [0, 9], [8, 1], [2, 7], [3, 6], [0, 9], [8, 1]]);
      expect(scorecard.calculate()).toEqual(81);
    });

    it('returns correct total score with spares and strikes', () => {
      const scorecard = new BowlingScoring([[8, 2], [3, 7], [3, 6], [0, 9], [8, 2], [3, 7], [3, 6], [0, 9], [10, 0]]);
      expect(scorecard.calculate()).toEqual(98);
    })

  });

  describe('after a full 10 frame game', () => {
    it('returns correct total score with no spares or strikes', () => {
      const scorecard = new BowlingScoring([[8, 1], [2, 7], [3, 6], [0, 9], [8, 1], [2, 7], [3, 6], [0, 9], [8, 1], [2, 7]]);
      expect(scorecard.calculate()).toEqual(90);
    });
  });

});