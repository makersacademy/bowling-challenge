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
      }
      expect(bowling.getTotalScore()).toEqual(0);
    })
    it('has a correct total for a game without spares and strikes', () => {
      for(let i = 0; i < 20 ; i++) {
        bowling.roll(2);
      }
      expect(bowling.getTotalScore()).toEqual(40);
    })
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
})