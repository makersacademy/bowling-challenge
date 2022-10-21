const Scorecard = require('../lib/scorecard');
// const Frame = require('../lib/frame')

describe('Scorecard', () => {
  describe('#scoreArr', () => {
    xit('adds 2 open frame scores to score array', () => {
      const scorecard = new Scorecard();
      const dummyFrame1 = { sumRolls: () => 7 };
      const dummyFrame2 = { sumRolls: () => 8 };
      scorecard.sumScore(dummyFrame1);
      scorecard.sumScore(dummyFrame2);
      // scorecard.addRoll(7)
      // scorecard.addRoll(1)
      // scorecard.addRoll(1)
      // scorecard.addRoll(1)
      expect(scorecard.scoreArray()).toStrictEqual([7,8]);
    });
  });

  describe('#sumScore', () => {
    xit('sums two open frame scores', () => {
      const scorecard = new Scorecard();
      const dummyFrame1 = { sumRolls: () => 7 };
      const dummyFrame2 = { sumRolls: () => 8 };
      scorecard.sumScore(dummyFrame1);
      scorecard.sumScore(dummyFrame2);
      expect(scorecard.scoreArray()).toStrictEqual([7,8]);
    });
  });
});
