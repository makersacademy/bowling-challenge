describe('Example rolls', function () {
  if (typeof require !== 'undefined') {
    Scorecard = require('../../src/Scorecard')
    Frame = require('../../src/Frame')
  }
  var scorecard, rollGutterballs

  multipleRolls = function (score, n) {
    for (var i = 0; i < n; i++) {
      scorecard.roll(score)
    }
  }

  beforeEach(function () {
    scorecard = new Scorecard()
  })

  describe('20 gutter balls in a row', function () {
    it('The game should be complete with a score of 0', function () {
      multipleRolls(0, 20)

      expect(scorecard.isComplete()).toBe(true)
      expect(scorecard.total()).toBe(0)
    })
  })

  describe('19 gutter balls in a row', function () {
    it('The game should not be complete with a score of 0', function () {
      multipleRolls(0, 19)

      expect(scorecard.isComplete()).toBe(false)
      expect(scorecard.total()).toBe(0)
    })
  })

  describe('Roll 3 20 times', function () {
    it('The game should be complete with a score of 60', function () {
      multipleRolls(3, 20)
      expect(scorecard.isComplete()).toBe(true)
      expect(scorecard.total()).toBe(60)
    })
  })

  describe('A strike followed by 18 gutterballs', function () {
    it('The game should be complete', function () {
      scorecard.roll(10)
      multipleRolls(0, 18)
      expect(scorecard.isComplete()).toBe(true)
    })

    // it('The total score should be 10', function () {
    //   scorecard.roll(10)
    //   rollGutterballs(18)
    //   expect(scorecard.total()).toBe(10)
    // })
  })
})
