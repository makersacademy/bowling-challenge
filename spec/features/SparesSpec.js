'use strict'
/* global describe, it, expect, beforeEach, Scoresheet */

describe('One spare, two frames', function () {
  let scoresheet

  beforeEach(function () {
    scoresheet = new Scoresheet()
  })

  it('A user rolls a (1, 9) spare then a (9, 0) and the current score is 28', function () {
    scoresheet.roll(1)
    scoresheet.roll(9)

    scoresheet.roll(9)
    scoresheet.roll(0)

    expect(scoresheet.finalScore).toEqual(28)
  })
})
