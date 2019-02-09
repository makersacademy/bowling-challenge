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

  it('should begin the game on frame 1', function () {
    expect(bowling.frame).toEqual(1)
  })

  it('should count frames as scores are input', function () {
    enterScores(0, 4)
    expect(bowling.frame).toEqual(3)
  })

  it('should not mark the game complete until after 20 rolls', function () {
    enterScores(0, 4)
    expect(bowling.scorecardComplete).toEqual(false)
  })

  it('should mark the game complete after 20 rolls', function () {
    enterScores(0, 20)
    expect(bowling.scorecardComplete).toEqual(true)
  })

  it('should reset the frameScore to zero after each frame', function () {
    enterScores(1, 2)
    expect(bowling.frameScore).toEqual(0)
  })
})
