const Bowling = require('./bowling');

describe('bowling', () => {
  const bowling = new Bowling;

  describe('addRoll', () => {
    it('adds the roll score to the total score', () => {
      bowling.addRoll(4);
      bowling.addRoll(4);
      expect(bowling.getTotalScore()).toBe(8);
    });

    it('only adds the score when both rolls have been done', () => {
      bowling.addRoll(4);
      expect(bowling.getTotalScore()).toBe(8);
    })
  });
});