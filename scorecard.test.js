const Scorecard = require('./scorecard');

describe('.pins', () => {
  it('adds pins', () => {
    scorecard = new Scorecard()
    scorecard.recordPins(10, 1, 1)
    expect(scorecard.pins()).toEqual(
      [
        [10, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0, 0]
      ]
    );
  });
});