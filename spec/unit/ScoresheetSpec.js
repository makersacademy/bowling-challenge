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

})
