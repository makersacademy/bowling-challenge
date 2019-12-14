const ScoreCard = require('../../src/scorecard');

describe('ScoreCard', () => {
  const testScoreCard = new ScoreCard();
  it('keeps track of the current frame', () => {
    const newScoreCard = new ScoreCard();
    testScoreCard.nextFrame();

    expect(newScoreCard.getCurrentFrame()).toBe(1);
    expect(testScoreCard.getCurrentFrame()).toBe(2);
  });

  it('lets players set scores for each frame', () => {
    testScoreCard.setRollOne(5);
    testScoreCard.setRollTwo(4);
    testScoreCard.setRollOne(6);

    expect(testScoreCard.getTotalScore()).toEqual(15);
  });
});
