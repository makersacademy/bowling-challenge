const Scorecard = require('./scorecard');

describe('Scorecard', () => {
  it('should initially return 0 and an empty array of frames', () => {
    const scorecard = new Scorecard();
    expect(scorecard.calculateScore()).toBe(0);
    expect(scorecard.getFrames()).toEqual([]);
  });

  it('should return the first frame in the array', () => {
    const scorecard = new Scorecard();
    scorecard.addFrame(2, 5);
    expect(scorecard.getFrames()).toEqual([[2, 5]]);
    expect(scorecard.calculateScore()).toBe(7);
  });

  it('should return a score of 15 and two frames in the array', () => {
    const scorecard = new Scorecard();
    scorecard.addFrame(2, 5);
    scorecard.addFrame(3, 5);
    expect(scorecard.getFrames()).toEqual([[2, 5], [3, 5]]);
    expect(scorecard.calculateScore()).toBe(15);
  });
});