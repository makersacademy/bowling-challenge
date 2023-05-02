const ScoreCard = require('../src/scorecard');
const Frame = require('../src/frame');

describe('Integration', () => {
  it("adds frame(2, 5) to the scorecard", () => {
    const scoreCard = new ScoreCard();
    scoreCard.addFrame(2, 5);

    expect(scoreCard.calculateScore()).toEqual(7);
  })

  it("adds frame(2, 5) to the scorecard", () => {
    const scoreCard = new ScoreCard();
    scoreCard.addFrame(2, 5);
    scoreCard.addFrame(3, 5);

    expect(scoreCard.calculateScore()).toEqual(15);
  })

  it("adds frame(2, 5) to the scorecard", () => {
    const scoreCard = new ScoreCard();

    expect(scoreCard.calculateScore()).toEqual(0);
  })

  it("adds 9 frames to the scorecard", () => {
    const scoreCard = new ScoreCard()
    for(let i = 1; i<10; i++){scoreCard.addFrame(10);}

    expect(scoreCard.calculateScore()).toEqual(240);
  })

  it("adds the 10th frame to the scorecard", () => {
    const scoreCard = new ScoreCard()
    for(let i = 1; i<10; i++){scoreCard.addFrame(10);}
    scoreCard.addFrame(10, 10, 10);

    expect(scoreCard.calculateScore()).toEqual(300);
  })
})