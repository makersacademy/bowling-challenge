'use strict'
/* global describe, it, expect, beforeEach, Scoresheet */

describe('No strikes or spares game', function () {
  let scoresheet

  beforeEach(function () {
    scoresheet = new Scoresheet()
  })

  it('A user rolls 3, 20 times and the final score is 60', function () {
    for (let i = 1; i <= 20; i++) {
      scoresheet.roll(3)
    }

    expect(scoresheet.isComplete).toBeTruthy()
    expect(scoresheet.finalScore).toEqual(60)
  })
})
