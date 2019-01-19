'use strict'
/* global describe, it, expect, beforeEach, Scoresheet */

describe('With spares game', function () {
  let scoresheet

  beforeEach(function () {
    scoresheet = new Scoresheet()
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
