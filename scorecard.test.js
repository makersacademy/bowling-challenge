const ScoreCard = require('./scorecard')
const Game = require('./game')

describe('ScoreCard class', () => {
  it('rolls a 1 and a 4', () => {
    const scorecard = new ScoreCard;
    const rollList = [1, 4]
    for (let i = 0; i < 2; i++) {
      scorecard.game.roll(rollList[i]);
    }
    expect(scorecard.game.currentframe().score()).toBe(5);

    const pin_score = [["1, 4", 5]]
    let result = ""
    for (let i = 0; i < 1; i++) {
      result += `--------------\nFrame: ${i + 1}\nPins: ${pin_score[i][0]}\nRunning Score: ${pin_score[i][1]}\n`;
    };

    expect(scorecard.currentScore()).toBe(result);
  });

  it('rolls 1, 4, 4, 5, 6, 4', () => {
    const scorecard = new ScoreCard;
    const rollList = [1, 4, 4, 5, 6, 4]
    for (let i = 0; i < 6; i++) {
      scorecard.game.roll(rollList[i]);
    }
    expect(scorecard.game.currentframe().score()).toBe(10);
    expect(scorecard.game.currentframe().spare()).toBe(true);

    const pin_score = [["1, 4", 5], ["4, 5", 14], ["6, 4", 24]]
    let result = ""
    for (let i = 0; i < 3; i++) {
      result += `--------------\nFrame: ${i + 1}\nPins: ${pin_score[i][0]}\nRunning Score: ${pin_score[i][1]}\n`;
    };

    expect(scorecard.currentScore()).toBe(result)
  });

  it('rolls 1, 4, 4, 5, 6, 4, 5, 5', () => {
    const scorecard = new ScoreCard;
    const rollList = [1, 4, 4, 5, 6, 4, 5, 5]
    for (let i = 0; i < 8; i++) {
      scorecard.game.roll(rollList[i]);
    }
    expect(scorecard.game.currentframe().score()).toBe(10);
    expect(scorecard.game.currentframe().spare()).toBe(true);
    expect(scorecard.game.currentframe().done()).toBe(true);

    const pin_score = [["1, 4", 5], ["4, 5", 14], ["6, 4", 29], ["5, 5", 39]]
    let result = ""
    for (let i = 0; i < 4; i++) {
      result += `--------------\nFrame: ${i + 1}\nPins: ${pin_score[i][0]}\nRunning Score: ${pin_score[i][1]}\n`;
    };

    expect(scorecard.currentScore()).toBe(result)
  })

  it('rolls 1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6', () => {
    const scorecard = new ScoreCard;
    const rollList = [1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6]
    for (let i = 0; i < 19; i++) {
      scorecard.game.roll(rollList[i]);
    }
    expect(scorecard.game.currentframe().score()).toBe(16);
    expect(scorecard.game.currentframe().spare()).toBe(true);
    expect(scorecard.game.currentframe().done()).toBe(true);

    const pin_score = [["1, 4", 5], ["4, 5", 14], ["6, 4", 29], ["5, 5", 49], [10, 60], ["0, 1", 61], ["7, 3", 77], ["6, 4", 97], [10, 117], ["2, 8", 133]]
    let result = ""
    for (let i = 0; i < 10; i++) {
      result += `--------------\nFrame: ${i + 1}\nPins: ${pin_score[i][0]}\nRunning Score: ${pin_score[i][1]}\n`;
    };
    result += `--------------\nFinal Total: 133`

    expect(scorecard.currentScore()).toBe(result)
  })

  it('rolls perfect game', () => {
    const scorecard = new ScoreCard;
    const rollList = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
    for (let i = 0; i < 12; i++) {
      scorecard.game.roll(rollList[i]);
    }
    expect(scorecard.game.currentframe().score()).toBe(30);
    expect(scorecard.game.currentframe().strike()).toBe(true);
    expect(scorecard.game.currentframe().done()).toBe(true);

    let result = ""
    for (let i = 0; i < 10; i++) {
      result += `--------------\nFrame: ${i + 1}\nPins: 10\nRunning Score: ${(i + 1) * 30}\n`;
    };
    result += `--------------\nFinal Total: 300`

    expect(scorecard.currentScore()).toBe(result)
  })

  it('rolls gutter game', () => {
    const scorecard = new ScoreCard;
    const rollList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (let i = 0; i < 20; i++) {
      scorecard.game.roll(rollList[i]);
    }
    expect(scorecard.game.currentframe().score()).toBe(0);
    expect(scorecard.game.currentframe().spare()).toBe(false);
    expect(scorecard.game.currentframe().strike()).toBe(false);
    expect(scorecard.game.currentframe().done()).toBe(true);

    let result = ""
    for (let i = 0; i < 10; i++) {
      result += `--------------\nFrame: ${i + 1}\nPins: 0, 0\nRunning Score: 0\n`;
    };
    result += `--------------\nFinal Total: 0`

    expect(scorecard.currentScore()).toBe(result)
  });
});