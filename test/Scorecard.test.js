const Scorecard = require('../app/Scorecard');

beforeEach( () => {
  scorecard = new Scorecard();
});

describe('Scorecard class', () => {
  describe('frame score at start of game', () => {
    it('to equal zero', () => {
      expect(scorecard.frame1.score).toEqual(0);
      expect(scorecard.frame1.scoreThrow1).toEqual(0);
      expect(scorecard.frame1.scoreThrow2).toEqual(0);
      expect(scorecard.frame1.scoreThrow3).toEqual(0);
      expect(scorecard.frame1.bonus).toEqual('TBC');
    });
  });
});
