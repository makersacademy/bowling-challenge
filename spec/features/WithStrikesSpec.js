'use strict'
/* global describe, it, expect, beforeEach, Scoresheet */

describe('With strikes', function () {
  let scoresheet

  beforeEach(function () {
    scoresheet = new Scoresheet()
  })

  it('A user rolls a strike then a (2, 7) and the current score is 28', function () {
    scoresheet.roll(10)

    scoresheet.roll(2)
    scoresheet.roll(7)

    expect(scoresheet.finalScore).toEqual(28)
  })

  it('A user rolls a strike then a (2, 7) and the current score is 28', function () {
    scoresheet.roll(10)

    scoresheet.roll(3)
    scoresheet.roll(4)

    expect(scoresheet.finalScore).toEqual(24)
  })
})
