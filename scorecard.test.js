const Scorecard = require('./scorecard')

describe('Scorecard', () => {
  let scorecard;

  beforeEach(() => {
    scorecard = new Scorecard();
  });

  it('adds the frame score, when not a strike or spare', () => {
    scorecard.addFrame(2, 5)
    expect(scorecard.calculateScore()).toEqual(7)
  })

  it('adds the frame score, when a strike', () => {
    scorecard.addFrame(10)
    expect(scorecard.calculateScore()).toEqual(10)
  })

  it('calculates the correct score, without any strikes or spares', () => {
    scorecard.addFrame(2, 5)
    scorecard.addFrame(2, 5)
    scorecard.addFrame(2, 5)
    scorecard.addFrame(2, 5)
    scorecard.addFrame(2, 5)
    scorecard.addFrame(2, 5)
    scorecard.addFrame(2, 5)
    scorecard.addFrame(2, 5)
    scorecard.addFrame(2, 5)
    scorecard.addFrame(2, 5)
    expect(scorecard.calculateScore()).toEqual(70)
  })

  
})