const Scorecard = require('./scorecard')

describe('Scorecard', () => {
  it('counts the score of one frame, roll 1: 2, roll 2: 7', () => {
    const scorecard = new Scorecard;
    scorecard.frameInput(2);
    scorecard.frameInput(7);
    expect(scorecard.score).toEqual(9);
  })

  it('Changes roll from 1 to 2 after the first roll', () => {
    const scorecard = new Scorecard;
    scorecard.frameInput(2);
    expect(scorecard.roll).toEqual(2);
  })

  it('Changes from frame: 1 to frame: 2 after a roll', () => {
    const scorecard = new Scorecard;
    scorecard.frameInput(2)
    scorecard.frameInput(7)
    scorecard.frameInput(3)
    scorecard.frameInput(1)
    expect(scorecard.frame).toEqual(3)
  })
})