const Scorecard = require('./scorecard');

describe('Scorecard', () => {
  it('initially has a score of 0', () => {
    const scorecard = new Scorecard();
    expect(scorecard.calculateScore()).toEqual(0);
  });
  it('has one frame with a score of 9', () => {
    const scorecard = new Scorecard();
    scorecard.addFrame(4, 5);
    expect(scorecard.calculateScore()).toEqual(9);
  });
  it('has 2 frames with total score of 15', () => {
    const scorecard = new Scorecard();
    scorecard.addFrame(2, 5);
    scorecard.addFrame(3, 5);
    expect(scorecard.calculateScore()).toEqual(15);
  });
  it('has 10 frames max', () => {
    const scorecard = new Scorecard();
    for(let i = 0; i < 10; i++) {
      scorecard.addFrame(2, 5);
    }
    expect(() => scorecard.addFrame(2, 5)).toThrow('Error max frames reached!');
  });

})