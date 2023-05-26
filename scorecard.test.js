const Scorecard = require('./scorecard');

describe('Scorecard', () => {
  it('should initially return 0', () => {
    const scorecard = new Scorecard();
    expect(scorecard.calculateScore()).toBe(0);
  });

  it('should initially return an empty array', () => {
    const scorecard = new Scorecard();
    expect(scorecard.getFrames()).toEqual('[]');
  });
});