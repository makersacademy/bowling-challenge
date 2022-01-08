const Bowling = require('../bowling');

describe('Bowling', () => {
  it('can be initialised with a complete rolls scores', () => {
    const finishedBowling = new Bowling([1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6]);
    expect(finishedBowling.rolls).toEqual([1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6]);
  })

})