const Bowling = require('../bowlingGame.js');

describe('class Bowling', () => {
  const score = { whatever: () => 'double for bowlingScore' }
  beforeEach(()=> {
    bowling = new Bowling(score);
  })

  describe('turn', () => {
    it('starts at 1', () => {
      expect(bowling.getTurn()).toEqual(1);
    })
    it('increases to 2 after a roll', () => {
      bowling.roll(5);
      expect(bowling.getTurn()).toEqual(2);
    })
    it('goes back to 1 after 2 rolls', () => {
      bowling.roll(5);
      bowling.roll(1);
      expect(bowling.getTurn()).toEqual(1);
    })
  })
  describe('frame', () => {
    it('start at 1', () => {
      expect(bowling.getFrame()).toEqual(1);
    })
    it('stays at 1 after 1 roll if no strike is thrown', () => {
      bowling.roll(5);
      expect(bowling.getFrame()).toEqual(1);
    })
    it('changes to 2 after 2 rolls if no strike is thrown', () => {
      bowling.roll(5);
      bowling.roll(2);
      expect(bowling.getFrame()).toEqual(2);
    })
  })
  describe('validInput', () => {
    it('returns false for pins outside of 0 to 10', () => {
      expect(bowling.validInput(11)).toEqual(false);
    })
    it('returns true for pins within range of 0 to 10 on first turn', () => {
      expect(bowling.validInput(7)).toEqual(true);
    })
  })
})