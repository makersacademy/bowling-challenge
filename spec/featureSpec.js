
describe('Features', () => {
  const ScoreCard = require('../src/scoreCard')
  let scoreCard;

  beforeEach(() => {
    scoreCard = new ScoreCard();
  });

  it('completes a game after 20 rolls of 0', () => {
    for(let i = 1 ; i < 21 ; i++){
      scoreCard.recordScore(i, 0, 0);
    };
    expect(scoreCard.totalScore).toEqual(0);
    expect(scoreCard.isComplete).toEqual(true);
  });

});