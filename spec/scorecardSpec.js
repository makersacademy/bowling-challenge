'use strict'

describe('Scorecard', () => {
  let scorecard
  beforeEach(function () {
    scorecard = new Scorecard()
  })

  it('begins the game with a score of 0', () => {
    expect(scorecard.currentScore()).toEqual(0)
  })

})