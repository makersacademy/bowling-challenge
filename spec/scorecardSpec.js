'use strict'

describe('Scorecard', () => {
  let scorecard
  beforeEach(function () {
    scorecard = new Scorecard()
  })

  it('begins the 10 frame game with a score of 0', () => {
    expect(scorecard.framesArray().length).toEqual(10)
    expect(scorecard.currentScore()).toEqual(0)
  })

  it('begins the game at Frame 1: Roll 1', () => {
    expect(scorecard.currentFrame()).toEqual(1)
    expect(scorecard.currentRoll()).toEqual(1)
  })
})
