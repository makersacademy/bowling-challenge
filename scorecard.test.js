const Scorecard = require('./scorecard')

describe('scorecard', () => {
  let scorecard = new Scorecard
  it('has a frame count set to 1', () => {
    expect(scorecard.getFrameCounter()).toBe(1)
  })
  it('has a roll counter set to 1', () => {
    expect(scorecard.getRollCounter()).toBe(1)
  })
})