const ScoreCard = require('../lib/scoreCard')

describe('ScoreCard', () => {

  it('adds the frame to the scorecard and reads it back', () => {
    let scoreCard = new ScoreCard();
    expect(scoreCard.addFrame([4, 5])).toEqual([[4,5]])
  })

  it('reads the whole score card back', () => {
    let scoreCard = new ScoreCard();
    scoreCard.addFrame([4, 5])
    scoreCard.addFrame([2, 7])
    scoreCard.addFrame([0, 9])
    expect(scoreCard.readScore()).toEqual([[4,5], [2, 7], [0, 9]])
  })


})