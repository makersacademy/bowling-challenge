'use strict'

describe ('Scoresheet', function () {
  let scoresheet

  beforeEach (function () {
    scoresheet = new Scoresheet
  })

  it('is not complete by default', function () {
    expect(scoresheet.isComplete).toBeFalsy()
  })
})
