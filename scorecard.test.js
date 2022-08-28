const ScoreCard = require('./scorecard')
const Game = require('./game')

describe('ScoreCard class', () => {
  it('rolls a 1 and a 4', () => {
    const scorecard = new ScoreCard;
    scorecard.game.roll(1);
    scorecard.game.roll(4);
    expect(scorecard.game.currentframe().score()).toBe(5);
    const result = (
      `--------------\n` +
      `Frame: 1\n` +
      `Score: 5\n` +
      `--------------\n` +
      `Game Total: 5`
    )
    expect(scorecard.currentScore()).toEqual(result);
  });
});