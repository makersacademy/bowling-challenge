const Scorecard = require('../lib/scorecard');

describe('Scorecard', () => {
  describe('#totalScore', () => {
    const scorecard = new Scorecard();
    it('returns sum after first open frame', () => {
      scorecard.addRoll(6);
      scorecard.addRoll(1);
      expect(scorecard.totalScore()).toEqual(7);
    });
    it('then returns sum after 2nd open frame', () => {
      scorecard.addRoll(5);
      scorecard.addRoll(3);
      expect(scorecard.totalScore()).toEqual(15);
    });
  });
});
