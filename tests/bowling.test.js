const Bowling = require('../bowling');

const finishedBowling = new Bowling([1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6]);
const bowling = new Bowling();

describe('Bowling', () => {
  it('can be initialised with a complete rolls scores', () => {
    expect(finishedBowling.rolls).toEqual([1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6]);
  })

  it('reset a game', () => {
    finishedBowling.reset();
    expect(finishedBowling.rolls).toEqual([]);
  })
  
  it('add rolls', () => {
    bowling.roll([8, 1]);
    expect(bowling.rolls[bowling.rolls.length - 1]).toBe(1);
  })

  it('can check if roll a strike', () => {
    bowling.roll([10]);
    expect(bowling.checkStrike(2)).toBe(true);
  })

  it('return strike bonus points 0 if there is not points to calculate yet', () => {
    expect(bowling.strikeBonusPoints(2)).toBe(0);
  })

  it('can check if roll a spare', () => {
    bowling.roll([9, 1]);
    expect(bowling.checkSpare(3)).toBe(true);
  })

  it('return spare bonus points 0 if there is not points to calculate yet', () => {
    expect(bowling.spareBonusPoints(3)).toBe(0);
  })

  it('calculate the bonus points for a strike', () => {
    expect(bowling.strikeBonusPoints(2)).toBe(10);
  })

  it('calculate the bonus points for a spare', () => {
    bowling.roll([6, 3]);
    expect(bowling.spareBonusPoints(3)).toBe(6);
  })
})