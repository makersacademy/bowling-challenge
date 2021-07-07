'use strict'

 describe('No strikes or spares', function () {
  let scoresheet

   beforeEach (function () {
    scoresheet = new Scoresheet()
  })

   it('can calculate the score of a game with no spares or strikes', function () {
    for (let i = 1; i <= 20; i++) {
      scoresheet.roll(3)
    }

    expect(scoresheet.isComplete).toBeTruthy()
    expect(scoresheet.finalScore).toEqual(60)
  })
})
