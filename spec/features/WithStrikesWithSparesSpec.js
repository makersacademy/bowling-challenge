'use strict'
/* global describe, it, expect, beforeEach, Scoresheet */

describe('With strikes and spares', function () {
  let scoresheet

  beforeEach(function () {
    scoresheet = new Scoresheet()
  })

  it('A game with non consecutive strikes, with spares, the final score is 164', function () {
    scoresheet.roll(10)
    scoresheet.roll(2)
    scoresheet.roll(8)
    scoresheet.roll(10)
    scoresheet.roll(3)
    scoresheet.roll(7)
    scoresheet.roll(10)
    scoresheet.roll(2)
    scoresheet.roll(4)
    scoresheet.roll(10)
    scoresheet.roll(4)
    scoresheet.roll(6)
    scoresheet.roll(10)
    scoresheet.roll(4)
    scoresheet.roll(2)

    expect(scoresheet.isComplete).toBeTruthy()
    expect(scoresheet.finalScore).toEqual(164)
  })
})
