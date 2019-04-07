describe('Example rolls', function () {
  if (typeof require !== 'undefined') {
    Scorecard = require('../../src/Scorecard')
    Frame = require('../../src/Frame')
  }
  var scorecard, rollGutterballs

  rollGutterballs = function (n) {
    for (var i = 0; i < n; i++) {
      scorecard.roll(0)
    }
  }

  beforeEach(function () {
    scorecard = new Scorecard()
  })

  describe('20 gutter balls in a row', function () {
    it('The game should be complete with a score of 0', function () {
      rollGutterballs(20)

      expect(scorecard.isComplete()).toBe(true)
      expect(scorecard.total()).toBe(0)
    })
  })

  describe('19 gutter balls in a row', function () {
    it('The game should not be complete with a score of 0', function () {
      rollGutterballs(19)

      expect(scorecard.isComplete()).toBe(false)
      expect(scorecard.total()).toBe(0)
    })
  })
})
