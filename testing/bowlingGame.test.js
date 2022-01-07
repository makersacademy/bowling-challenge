const Bowling = require('../bowlingGame.js')

describe('class Bowling', () => {
  beforeEach(()=> {
    bowling = new Bowling();
  })
  describe('total score', () => {
    it('starts with a total score of 0', () => {
      expect(bowling.getTotalScore()).toEqual(0);
    })
    it('increases by the number of pins knocked down on roll', () => {
      bowling.roll(5)
      expect(bowling.getTotalScore()).toEqual(5);
    })
    it('has a total of 0 for a gutter game', () => {
      for(let i = 0; i < 20 ; i++) {
        bowling.roll(0);
        i += 1;
      }
      expect(bowling.getTotalScore()).toEqual(0);
    })
  })
})