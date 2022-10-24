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
    it('returns sum after spare + open frame', () => {
      const scorecard = new Scorecard();
      scorecard.addRoll(9);
      scorecard.addRoll(1);
      scorecard.addRoll(5);
      scorecard.addRoll(4);
      expect(scorecard.totalScore()).toEqual(24);
    });
    it('returns sum after strike + open frame', () => {
      const scorecard = new Scorecard();
      scorecard.addRoll(10);
      scorecard.addRoll(6);
      scorecard.addRoll(3);
      expect(scorecard.totalScore()).toEqual(28);
    });
    it('returns sum after double strike + open frame', () => {
      const scorecard = new Scorecard();
      scorecard.addRoll(10);
      scorecard.addRoll(10);
      scorecard.addRoll(4);
      scorecard.addRoll(2);
      expect(scorecard.totalScore()).toEqual(46);
    });
    it('returns sum after full game inc strikes in final frame', () => {
      const scorecard = new Scorecard();
      scorecard.addRoll(6);
      scorecard.addRoll(1);
      scorecard.addRoll(5);
      scorecard.addRoll(3);
      scorecard.addRoll(9);
      scorecard.addRoll(1);
      scorecard.addRoll(5);
      scorecard.addRoll(4);
      scorecard.addRoll(10);
      scorecard.addRoll(6);
      scorecard.addRoll(3);
      scorecard.addRoll(10);
      scorecard.addRoll(10);
      scorecard.addRoll(4);
      scorecard.addRoll(2);
      scorecard.addRoll(10);
      scorecard.addRoll(10);
      scorecard.addRoll(5);
      expect(scorecard.totalScore()).toEqual(138);
    });
    it('returns sum after perfect game', () => {
      const scorecard = new Scorecard();
      scorecard.addRoll(10);
      scorecard.addRoll(10);
      scorecard.addRoll(10);
      scorecard.addRoll(10);
      scorecard.addRoll(10);
      scorecard.addRoll(10);
      scorecard.addRoll(10);
      scorecard.addRoll(10);
      scorecard.addRoll(10);
      scorecard.addRoll(10);
      scorecard.addRoll(10);
      scorecard.addRoll(10);
      expect(scorecard.totalScore()).toEqual(300);
    });
  });
});
