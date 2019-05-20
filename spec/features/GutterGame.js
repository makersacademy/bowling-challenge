'use strict'

 describe('Gutter game', function () {
  let scoresheet

   beforeEach (function () {
    scoresheet = new Scoresheet()
  })

   it('A user rolls 0 20 times and the final score is 0', function () {
    for (let i = 1; i <= 20; i++) {
      scoresheet.roll(0)
    }

     expect(scoresheet.isComplete).toBeTruthy()
    expect(scoresheet.finalScorescore).toEqual(0)
  })

  it('has 0 rolls by default', function () {
    expect(scoresheet.rollCount).toEqual(0)
  })

   describe('#roll', function () {
    it('rolling 20 times completes the scoresheet', function () {
      for (let i = 1; i <= 20; i++) {
        scoresheet.roll(0)
      }

       expect(scoresheet.isComplete).toBeTruthy()
    })
  })
})
