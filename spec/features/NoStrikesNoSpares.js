'use strict'

describe ('No strikes or spares', function () {
  let scoresheet

  beforeEach (function () {
    scoresheet = new Scoresheet
  })

  it('A user rolls 1 20 times and the final score is 20', function () {
    for (let i = 1; i <= 20; i++) {
      scoresheet.roll(1)
    }

    expect(scoresheet.isComplete).toBeTruthy()
    expect(scoresheet.finalScore).toEqual(20)
  })
})
