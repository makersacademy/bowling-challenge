const Scorecard = require('./scorecard');

describe('Scorecard', () => {
  it('should initially return 0', () => {
    const scorecard = new Scorecard();
    expect(scorecard.calculateScore()).toBe(0);
  });

  it('should initially return an empty array', () => {
    const scorecard = new Scorecard();
    expect(scorecard.getFrames()).toEqual([]);
  });

  it('should return the first frame in the array', () => {
    const scorecard = new Scorecard();
    scorecard.addFrame(2, 5);
    expect(scorecard.getFrames()).toEqual([[2, 5]]);
  });
});