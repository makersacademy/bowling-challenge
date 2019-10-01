describe('Rolling', function () {
  if (typeof require !== 'undefined') {
    Scorecard = require('../../src/Scorecard')
    Frame = require('../../src/Frame')
  }
  var scorecard

  beforeEach(function () {
    scorecard = new Scorecard()
  })

  describe('I start a game with a gutterball', function () {
    it("The frame's first roll is 0", function () {
      scorecard.roll(0)
      expect(scorecard.frames[0].roll1).toBe(0)
    })

    it("The frame's second roll is 'null'", function () {
      scorecard.roll(0)
      expect(scorecard.frames[0].roll2).toEqual(null)
    })
  })

  describe('I start a game with a roll of 1', function () {
    it("The frame's first roll is 1", function () {
      scorecard.roll(1)
      expect(scorecard.frames[0].roll1).toBe(1)
    })
  })

  describe('I start a game by rolling 1 then 2', function () {
    it("The frame's second roll is 2", function () {
      scorecard.roll(1)
      scorecard.roll(2)
      expect(scorecard.frames[0].roll2).toBe(2)
    })
  })
})
