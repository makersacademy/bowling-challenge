const { exportAllDeclaration } = require('@babel/types');
const ScoreCard = require('./scoreCard');

describe(`ScoreCard`, () => {
  it(`can roll a gutter game`, () => {
    const scorecard = new ScoreCard();
    for (let i = 0 ; i < 20 ; i++) {
      scorecard.rollBall(0);
    }
    expect(scorecard.totalScore()).toBe(0)
  });

  it(`can roll all ones`, () => {
    const scorecard = new ScoreCard();
    for (let i = 0 ; i < 20 ; i++) {
      scorecard.rollBall(1);
    }
    expect(scorecard.totalScore()).toBe(20)
  });

  it(`can roll a spare`, () => {
    const scorecard = new ScoreCard();
    scorecard.rollBall(5);
    scorecard.rollBall(5);
    scorecard.rollBall(3);
    for (let i = 0 ; i < 17 ; i++) {
      scorecard.rollBall(0);
    }
    expect(scorecard.totalScore()).toBe(16)
  });

  it(`can roll a strike`, () => {
    const scorecard = new ScoreCard();
    scorecard.rollBall(10);
    scorecard.rollBall(5);
    scorecard.rollBall(2);
    for (let i = 0 ; i < 16 ; i++) {
      scorecard.rollBall(0);
    }
    expect(scorecard.totalScore()).toBe(24)
  });

  it(`can roll the perfect game`, () => {
    const scorecard = new ScoreCard();
    for (let i = 0 ; i < 12 ; i++) {
      scorecard.rollBall(10);
    }
    expect(scorecard.totalScore()).toBe(300)
  });

  it(`can roll all spares`, () => {
    const scorecard = new ScoreCard();
    for (let i = 0 ; i < 10 ; i++) {
      scorecard.rollBall(9);
      scorecard.rollBall(1);
    }
    scorecard.rollBall(9);
    expect(scorecard.totalScore()).toBe(190)
  });
});
