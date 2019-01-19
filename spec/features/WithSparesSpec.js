'use strict'
/* global describe, it, expect, beforeEach, Scoresheet */

describe('With spares', function () {
  let scoresheet

  beforeEach(function () {
    scoresheet = new Scoresheet()
  })

  it('A user rolls a spare then a (7, 0) and the current score is 24', function () {
    scoresheet.roll(1)
    scoresheet.roll(9)

    scoresheet.roll(7)
    scoresheet.roll(0)

    expect(scoresheet.finalScore).toEqual(24)
  })

  it('A user rolls a (1, 9) spare 9 times then (9, 0) and the final score is 116', function () {
    for (let i = 1; i <= 9; i++) {
      scoresheet.roll(1)
      scoresheet.roll(9)
    }
    scoresheet.roll(9)
    scoresheet.roll(0)

    expect(scoresheet.isComplete).toBeTruthy()
    expect(scoresheet.finalScore).toEqual(116)
  })
})
