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
})
