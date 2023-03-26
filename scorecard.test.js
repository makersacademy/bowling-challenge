const Scorecard = require('./scorecard');

describe('Scorecard', () => {
  it('initially has a score of 0', () => {
    const scorecard = new Scorecard();
    expect(scorecard.calculateScore()).toEqual(0);
  });
  it('has a score of 9', () => {
    const scorecard = new Scorecard();
    scorecard.addFrame(4, 5);
    expect(scorecard.calculateScore()).toEqual(9);
  });

})