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
    it('does not add a spare to the total score immediately', () => {
      bowling.logScore(4);
      bowling.logScore(6);
      expect(bowling.totalScore).toEqual(33);
    })
    it('calculates the spare score on the next roll', () => {
      bowling.logScore(6);
      expect(bowling.totalScore).toEqual(49);
    })
    it('knows what frame it is on', () => {
      expect(bowling.frameNumber).toEqual(5);
    })
    it('knows when it is on frame 10', () => {
      for(let i = 0; i < 9; i++) {
        bowling.logScore(1);
      }
      expect(bowling.frameNumber).toEqual(10);
    })
    it('still knows the score', () => {
      expect(bowling.totalScore).toEqual(64);
    })
    // now to write some tests for round ten!!
  })
})