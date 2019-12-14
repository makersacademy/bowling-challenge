const ScoreCard = require('../../src/scorecard');

describe('ScoreCard', () => {
  let testScoreCard = new ScoreCard();

  beforeEach(() => {
    testScoreCard.setRollOne(5);
    testScoreCard.setRollTwo(4);
    testScoreCard.setRollOne(6);
    testScoreCard.setRollTwo(2);
  });

  afterEach(() => {
    testScoreCard = new ScoreCard();
  });

  it('keeps track of the current frame', () => {
    const newScoreCard = new ScoreCard();

    expect(newScoreCard.getCurrentFrame()).toBe(1);
    expect(testScoreCard.getCurrentFrame()).toBe(3);
  });

  it('lets players set scores for each frame', () => {
    expect(testScoreCard.getTotalScore()).toEqual(17);
  });

  it('prevents players from adding two scores in a frame with a sum greater than 10', () => {
    testScoreCard.setRollOne(9);

    expect(() => { testScoreCard.setRollTwo(5); }).toThrowError(ScoreCard.INVALID_SCORE());
  });

  it('prevents players from entering a score for roll two until after the first roll', () => {
    expect(() => { testScoreCard.setRollTwo(7); }).toThrowError(ScoreCard.NO_FIRST_ROLL());
  });
});
