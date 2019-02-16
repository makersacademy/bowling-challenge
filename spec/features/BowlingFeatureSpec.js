'use strict'

describe('Bowling', function () {
  let bowling

  let enterScores = function (score, repeats) {
    let i
    for (i = 0; i < repeats; i++) {
      bowling.enterScore(score)
    }
  }

  beforeEach(function () {
    bowling = new Bowling()   // eslint-disable-line
  })

  it('should record a gutter game correctly', function () {
    enterScores(0, 20)
    expect(bowling.scorecardComplete).toEqual(true)
    expect(bowling.gameScore()).toEqual(0)
  })

  it('should record a no strikes or spares game correctly', function () {
    enterScores(3, 8)
    enterScores(0, 2)
    enterScores(4, 8)
    expect(bowling.scorecardComplete).toEqual(false)
    expect(bowling.gameScore()).toEqual(56)
    enterScores(1, 2)
    expect(bowling.scorecardComplete).toEqual(true)
    expect(bowling.gameScore()).toEqual(58)
  })

  it('should record an all spares game correctly', function () {
    enterScores(5, 18)
    expect(bowling.scorecardComplete).toEqual(false)
    expect(bowling.gameScore()).toEqual(130)
    enterScores(5, 2)
    enterScores(5, 1)
    expect(bowling.scorecardComplete).toEqual(true)
    expect(bowling.gameScore()).toEqual(150)
  })

  it('should record an all strikes game correctly', function () {
    enterScores(10, 9)
    expect(bowling.scorecardComplete).toEqual(false)
    expect(bowling.gameScore()).toEqual(230)
    enterScores(10, 1)
    enterScores(10, 2)
    expect(bowling.scorecardComplete).toEqual(true)
    expect(bowling.gameScore()).toEqual(300)
  })

  it('should match the scoring of the example game', function () {
    enterScores(1, 1)
    enterScores(4, 2)
    enterScores(5, 1)
    enterScores(6, 1)
    enterScores(4, 1)
    enterScores(5, 2)
    enterScores(10, 1)
    enterScores(0, 1)
    enterScores(1, 1)
    enterScores(7, 1)
    enterScores(3, 1)
    enterScores(6, 1)
    enterScores(4, 1)
    enterScores(10, 1)
    enterScores(2, 1)
    enterScores(8, 1)
    enterScores(6, 1)
    expect(bowling.gameScore()).toEqual(133)
  })
})
