
describe('Features', () => {
  const ScoreCard = require('../src/scoreCard')
  let scoreCard;

  beforeEach(() => {
    scoreCard = new ScoreCard();
  });

  it('completes a game after 20 rolls of 0', () => {
    for(let i = 1 ; i < 11 ; i++){
      return scoreCard.recordScore(i, 0, 0);
    };
    expect(scoreCard.isGameComplete).toEqual(true);
    expect(scoreCard.totalScore).toEqual(0);
  });

  // it('')

});