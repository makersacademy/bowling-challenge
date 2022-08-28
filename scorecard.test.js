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
    );
    expect(scorecard.currentScore()).toBe(result);
  });
  it('rolls 1, 4, 4, 5, 6, 4', () => {
    const scorecard = new ScoreCard;
    scorecard.game.roll(1);
    scorecard.game.roll(4);
    scorecard.game.roll(4);
    scorecard.game.roll(5);
    scorecard.game.roll(6);
    scorecard.game.roll(4);
    expect(scorecard.game.currentframe().score()).toBe(10);
    expect(scorecard.game.currentframe().spare()).toBe(true);
    const result = (
      `--------------\n` +
      `Frame: 1\n` +
      `Score: 5\n` +
      `--------------\n` +
      `Frame: 2\n` +
      `Score: 9\n` +
      `--------------\n` +
      `Frame: 3\n` +
      `Score: 10\n` +
      `--------------\n` +
      `Game Total: 24`
    );
    expect(scorecard.currentScore()).toBe(result)
  })
});