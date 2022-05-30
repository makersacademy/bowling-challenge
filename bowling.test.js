const Bowling = require('./bowling.js');

describe('Bowling', () => {
  describe('.logScore()', () => {
    const bowling = new Bowling;
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
    it('calculates the correct score with a low scoring round ten', () => {
      for(let i = 0; i < 11; i++) {
        bowling.logScore(1);
      }
      expect(bowling.totalScore).toEqual(66);
    })
  })
  describe('round ten behaviour with one strike', () => {
    const bowling = new Bowling;
    it('calculates the correct score with one strike in round ten', () => {
      for(let i = 0; i < 18; i++) {
        bowling.logScore(1);
      }
      bowling.logScore(10);
      expect(bowling.totalScore).toEqual(18);
    })
    it('calculates the correct score with one strike and two low scores in round ten', () => {
      bowling.logScore(3);
      bowling.logScore(2);
      expect(bowling.totalScore).toEqual(38);
    })
  })
  describe('round ten behaviour with two strikes', () => {
    const bowling = new Bowling;
    it('calculates the correct score with two strikes in round ten', () => {
      for(let i = 0; i < 18; i++) {
        bowling.logScore(1);
      }
      bowling.logScore(10);
      bowling.logScore(10);
      expect(bowling.totalScore).toEqual(18);
    })
    it('calculates the correct score with two strikes and a low score in round ten', () => {
      bowling.logScore(2);
      expect(bowling.totalScore).toEqual(34);
    })
  })
  describe('frameNumber', () => {
    const bowling = new Bowling;
    it('knows what frame it is on', () => {
      for(let i = 0; i < 9; i++) {
        bowling.logScore(1);
      }
      expect(bowling.frameNumber).toEqual(5);
    })
    it('knows when it is on frame 10', () => {
      for(let i = 0; i < 9; i++) {
        bowling.logScore(1);
      }
      expect(bowling.frameNumber).toEqual(10);
    })
  })
})



