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
    it('stops at 10', () => {
      for(let i = 0; i < 20 ; i++) {
        bowling.roll(0);
      }
      expect(bowling.changeFrame()).toEqual("You are already on the last frame")
    })
  })
  describe('validInput', () => {
    it('returns false for pins outside of 0 to 10', () => {
      expect(bowling.validInput(11)).toEqual(false);
    })
    it('returns true for pins within range of 0 to 10 on first turn', () => {
      expect(bowling.validInput(7)).toEqual(true);
    })
    it('returns false first and second turn combine to a invalid number of pins', () => {
      bowling.roll(8)
      expect(bowling.validInput(7)).toEqual(false);
    })
  })
  describe('roll', () => {
    it('return Invalid input if pins outside of 0 to 10 given on first roll', () => {
      expect(bowling.roll(14)).toEqual("Invalid input");
    })
    it('does not let you roll beyond the end of the game', () => {
      for(let i = 0; i < 21 ; i++) {
        bowling.roll(0);
      }
      expect(bowling.roll(1)).toEqual("Game Over. No more rolls.")
    })
  })
  describe('currentFrame', () => {
    it('is empty to begin with', () => {
      expect(bowling.currentFrame).toEqual([]);
    })
    it('stores first roll', () => {
      bowling.roll(4)
      expect(bowling.currentFrame).toEqual([4]);
    })
    it('stores first 2 rolls', () => {
      bowling.roll(4)
      bowling.roll(2)
      expect(bowling.currentFrame).toEqual([4, 2]);
    })
    it('stores only first roll on 2nd frame', () => {
      bowling.roll(4)
      bowling.roll(2)
      bowling.roll(3)
      expect(bowling.currentFrame).toEqual([3]);
    })
  })
})