const Scorecard = require('./scorecard');

describe('Scorecard', () => {
  it('initially has a score of 0', () => {
    const scorecard = new Scorecard();
    expect(scorecard.calculateScore()).toEqual(0);
  });
})