const Scorecard = require('../lib/scorecard');

describe('Scorecard', () => {
  describe('#scoreArr', () => {
    it('adds 2 open frame scores to score array', () => {
      const scorecard = new Scorecard();
      const frame1 = new Frame(6, 1);
      const frame2 = new Frame(5, 3);
      frame1.addRolls();
      frame2.addRolls();
      scorecard.frameAdd(frame1);
      scorecard.frameAdd(frame2);
      expect(frame.scoreArr()).toEqual([7, 8]);
    });
  });
});
