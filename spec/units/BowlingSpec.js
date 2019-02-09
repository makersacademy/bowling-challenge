'use strict'

let Bowling = require('../../src/Bowling.js')

describe('Bowling', function () {
  let bowling

  beforeEach(function () {
    bowling = new Bowling()
  })

  it('should begin the game on frame 1', function () {
    expect(bowling.frame).toEqual(1)
  })

  it('should count frames as scores are input', function () {
    let i
    for (i = 0; i < 4; i++) {
      bowling.enterScore(0)
    }
    expect(bowling.frame).toEqual(3)
  })

  it('should not mark the game complete until after 20 rolls', function () {
    let i
    for (i = 0; i < 4; i++) {
      bowling.enterScore(0)
    }
    expect(bowling.scorecardComplete()).toEqual(false)
  })

  it('should mark the game complete after 20 rolls', function () {
    let i
    for (i = 0; i < 20; i++) {
      bowling.enterScore(0)
    }
    expect(bowling.scorecardComplete()).toEqual(true)
  })

  it('should reset the frameScore to zero after each frame', function () {
    let i
    for (i = 0; i < 3; i++) {
      bowling.enterScore(1)
    }
    expect(bowling.frameScore).toEqual(0)
  })

  it('should mark a frame complete after 2 rolls', function () {
    let i
    for (i = 0; i < 3; i++) {
      bowling.enterScore(0)
    }
    expect(bowling.frameComplete).toEqual(true)
  })

  it('should not mark a frame complete after 1 roll', function () {
    bowling.enterScore(0)
    expect(bowling.frameComplete).toEqual(false)
  })
})
