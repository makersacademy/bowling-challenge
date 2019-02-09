'use strict'

let Bowling = require('../../src/Bowling.js')

describe('Bowling', function () {
  let bowling

  beforeEach(function () {
    bowling = new Bowling()
  })

  it('should record a gutter game correctly', function () {
    let i
    for (i = 0; i < 20; i++) {
      bowling.enterScore(0)
    }
    expect(bowling.scorecardComplete).toEqual(true)
    expect(bowling.score).toEqual(0)
  })
})
