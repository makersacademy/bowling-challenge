'use strict'

 describe('Scoresheet', function () {
  let scoresheet

   beforeEach (function () {
    scoresheet = new Scoresheet()
  })

   it('is not complete by default', function () {
    expect(scoresheet.isComplete).toBeFalsy()
  })

  it('is has a final score of 0 by default', function () {
      expect(scoresheet.finalScore).toEqual(0)
    })

    it('has 0 rolls by default', function () {
    expect(scoresheet.rollCount).toEqual(0)
  })

  describe('#roll', function () {
    it('increments the rollCount by one', function () {
      scoresheet.roll()
      expect(scoresheet.rollCount).toEqual(1)
    })

    it('rolling 20 times completes the scoresheet', function () {
      for (let i = 1; i <= 20; i++) {
        scoresheet.roll(0)
      }
      expect(scoresheet.isComplete).toBeTruthy()
    })

    it('adds the roll amount to the finalScore', function () {
      scoresheet.roll(5)
      expect(scoresheet.finalScore).toEqual(5)
    })
  })

})
