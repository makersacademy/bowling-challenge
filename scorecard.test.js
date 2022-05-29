const Scorecard = require('./scorecard')

describe('Scorecard', () => {
  it('counts the score of one frame, roll 1: 2, roll 2: 7', () => {
    const scorecard = new Scorecard;
    scorecard.frameScore(2);
    scorecard.frameScore(7);
    expect(scorecard.score).toEqual(9);
  })

  it('Changes roll from 1 to 2 after the first roll', () => {
    const scorecard = new Scorecard;
    scorecard.frameScore(2);
    expect(scorecard.roll).toEqual(2);
  })

  it('Changes from frame: 1 to frame: 2 after a roll', () => {
    const scorecard = new Scorecard;
    scorecard.frameScore(2)
    scorecard.frameScore(7)
    scorecard.frameScore(3)
    scorecard.frameScore(1)
    expect(scorecard.frame).toEqual(3)
  })
})