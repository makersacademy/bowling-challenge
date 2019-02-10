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
    expect(bowling._currentFrame().number()).toEqual(0)
  })

  it('should count frames as scores are input', function () {
    enterScores(0, 4)
    expect(bowling._currentFrame().number()).toEqual(2)
  })

  it('should not mark the game isComplete until after 20 rolls', function () {
    enterScores(0, 4)
    expect(bowling.scorecardComplete).toEqual(false)
  })

  it('should mark the game isComplete after 20 rolls', function () {
    enterScores(0, 20)
    expect(bowling.scorecardComplete).toEqual(true)
  })

  it('should reset the frameScore to zero after each frame', function () {
    enterScores(1, 2)
    expect(bowling._currentFrame().frameScore()).toEqual(0)
  })

  it('should add gameScore from each frame', function () {
    enterScores(2, 4)
    expect(bowling.gameScore()).toEqual(8)
  })

  describe('spares are calculated correctly', function () {
    it('should track whether a spare has been struck', function () {
      enterScores(5, 2)
      expect(bowling._previousFrame().isSpare()).toEqual(true)
    })

    it('should calculate spares correctly', function () {
      enterScores(5, 2)
      enterScores(2, 2)
      expect(bowling.gameScore()).toEqual(16)
    })
  })

  describe('strikes are calculated correctly', function () {
    it('should track whether a strike has been struck', function () {
      enterScores(10, 1)
      expect(bowling._previousFrame().isStrike()).toEqual(true)
    })

    it('it should calculate standalone strikes correctly', function () {
      enterScores(10, 1)
      enterScores(3, 2)
      enterScores(4, 2)
      expect(bowling.gameScore()).toEqual(30)
    })

    it('calculates sequential strikes correctly', function () {
      enterScores(10, 3)
      enterScores(2, 4)
      expect(bowling.gameScore()).toEqual(74)
    })

    it('calculates strikes followed by a spare correctly', function () {
      enterScores(10, 1)
      enterScores(6, 1)
      enterScores(4, 1)
      enterScores(3, 2)
      expect(bowling.gameScore()).toEqual(39)
    })

    it('calculates a spare-strike-spare combo correctly', function () {
      enterScores(5, 2)
      enterScores(10, 1)
      enterScores(7, 1)
      enterScores(3, 1)
      enterScores(1, 2)
      expect(bowling.gameScore()).toEqual(53)
    })
  })
})
