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

  it('A game with non consecutive strikes, no spares, the final score is 118', function () {
    scoresheet.roll(10)
    scoresheet.roll(2)
    scoresheet.roll(7)
    scoresheet.roll(10)
    scoresheet.roll(3)
    scoresheet.roll(5)
    scoresheet.roll(10)
    scoresheet.roll(2)
    scoresheet.roll(4)
    scoresheet.roll(10)
    scoresheet.roll(4)
    scoresheet.roll(1)
    scoresheet.roll(10)
    scoresheet.roll(4)
    scoresheet.roll(2)

    expect(scoresheet.isComplete).toBeTruthy()
    expect(scoresheet.finalScore).toEqual(118)
  })
})
