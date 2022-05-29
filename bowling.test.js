const Bowling = require('./bowling.js');

describe('Bowling', () => {
  const bowling = new Bowling;
  describe('.logScore()', () => {
    it('adds score from a low scoring round to the total score', () => {
      bowling.logScore(2);
      bowling.logScore(3);
      expect(bowling.totalScore).toEqual(5);
    })
    it('does not add a strike to the total score immediately', () => {
      bowling.logScore(10);
      expect(bowling.totalScore).toEqual(5);
    })
    it('calculates the strike score after two more rolls', () => {
      bowling.logScore(4);
      bowling.logScore(5);
      expect(bowling.totalScore).toEqual(33);
    })
  })
})