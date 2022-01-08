const Bowling = require('../bowling');

describe('Bowling', () => {
  it('can be initialised with a complete rolls scores', () => {
    const finishedBowling = new Bowling([1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6]);
    expect(finishedBowling.rolls).toEqual([1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6]);
  })
  
  it('add rolls', () => {
    const bowling = new Bowling();
    bowling.roll([8, 1]);
    expect(bowling.rolls[bowling.rolls.length - 1]).toBe(1);
  })

  it('reset a game', () => {
    const finishedBowling = new Bowling([1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6]);
    finishedBowling.reset();
    expect(finishedBowling.rolls).toEqual([]);
  })

  it('can check if roll a strike', () => {
    const bowling = new Bowling()
    bowling.roll([10])
    expect(bowling.checkStrike(0)).toBe(true)
  })
})