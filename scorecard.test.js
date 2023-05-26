const Scorecard = require('./scorecard');

describe('Scorecard', () => {
  it('should initially return 0 and an empty array of frames', () => {
    const scorecard = new Scorecard();
    expect(scorecard.getFrames()).toEqual([]);
    expect(scorecard.getTotalScore()).toBe(0);
  });

  it('should return the score of 7 first frame in the array', () => {
    const scorecard = new Scorecard();
    scorecard.addFrame(2, 5);
    scorecard.calculateBasicScore();
    scorecard.calculateStrikeBonuses();

    expect(scorecard.getFrames()).toEqual([[2, 5]]); 
    expect(scorecard.getTotalScore()).toBe(7);
  });

  it('should return a score of 15 and two frames in the array', () => {
    const scorecard = new Scorecard();
    scorecard.addFrame(2, 5);
    scorecard.addFrame(3, 5);
    scorecard.calculateBasicScore();
    scorecard.calculateStrikeBonuses();

    expect(scorecard.getFrames()).toEqual([[2, 5], [3, 5]]);
    expect(scorecard.getTotalScore()).toBe(15);
  });

  it('should return 29 instead of 27 because the strike doubles the next two rolls', () => {
    const scorecard = new Scorecard();
    scorecard.addFrame(2, 5);
    scorecard.addFrame(3, 5);
    scorecard.addFrame(10, 0);
    scorecard.addFrame(1, 1);
    scorecard.calculateBasicScore();
    scorecard.calculateStrikeBonuses();

    expect(scorecard.getTotalScore()).toBe(29);
  })
});