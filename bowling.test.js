const Bowling = require('./bowling');

describe('bowling', () => {
  const bowling = new Bowling;

  describe('addRoll', () => {
    it('adds the roll score to the total score', () => {
      bowling.addRoll(1);
      bowling.addRoll(4);
      expect(bowling.getTotalScore()).toBe(5);
    });

    it('only adds the score when both rolls have been done', () => {
      bowling.addRoll(5);
      expect(bowling.getTotalScore()).toBe(5);
      bowling.addRoll(5);
      expect(bowling.getTotalScore()).toBe(15);
    });

    it('doubles the score of the first roll when previous frame was a spare', () => {
      bowling.addRoll(3);
      bowling.addRoll(3);
      expect(bowling.getTotalScore()).toBe(24);
    });

  });
});