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

  it('should begin the game on frame 0', function () {
    expect(bowling.frame).toEqual(0)
  })

  it('should count frames as scores are input', function () {
    enterScores(0, 4)
    expect(bowling.frame).toEqual(2)
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

  it('should add gameScore from each frame', function () {
    enterScores(2, 4)
    expect(bowling.gameScore).toEqual(8)
  })

  it('should track whether a spare has been struck', function () {
    enterScores(5, 2)
    expect(bowling.spare).toEqual(true)
  })

  it('should reset the spare flag after one roll', function () {
    enterScores(5, 2)
    enterScores(1, 1)
    expect(bowling.spare).toEqual(false)
  })
})
