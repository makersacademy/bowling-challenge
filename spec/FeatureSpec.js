describe('Feature tests', function () {
  var Scorecard = require('../lib/Scorecard')
  var scorecard

  scorecard = new Scorecard()

  describe('All rolls are gutter balls', function () {
    it('The game should be complete with a score of 0', function () {
      for (var i = 0; i < 20; i++) {
        scorecard.roll(0)
      }

      expect(scorecard.isComplete()).toBe(true)
      expect(scorecard.total()).toBe(0)
    })
  })
})
