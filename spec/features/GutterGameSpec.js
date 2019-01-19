'use strict'
/* global describe, it, expect, beforeEach, Scoresheet */

describe('Gutter game', function () {
  let scoresheet

  beforeEach(function () {
    scoresheet = new Scoresheet()
  })

  it('A user rolls 0, 20 times and the final score is 0', function () {
    for (let i = 1; i <= 20; i++) {
      scoresheet.roll(0)
    }

    expect(scoresheet.isComplete).toBeTruthy()
    expect(scoresheet.finalScore).toEqual(0)
  })
})
