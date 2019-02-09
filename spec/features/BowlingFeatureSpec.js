'use strict'

let Bowling = require('../../src/Bowling.js')

describe('Bowling', function () {
  let bowling

  let enterScores = function (score, repeats) {
    let i
    for (i = 0; i < repeats; i++) {
      bowling.enterScore(score)
    }
  }

  beforeEach(function () {
    bowling = new Bowling()
  })

  it('should record a gutter game correctly', function () {
    enterScores(0, 20)
    expect(bowling.scorecardComplete).toEqual(true)
    expect(bowling.gameScore).toEqual(0)
  })
})
