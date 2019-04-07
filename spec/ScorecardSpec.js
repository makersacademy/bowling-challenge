describe('Scorecard', function () {
  var scorecard, frame

  if (typeof(require) !== 'undefined') {
    Scorecard = require('../src/Scorecard')
  }

  scorecard = new Scorecard()

  describe('.total', function () {
    xit('the total should be the sum of the frame scores', function () {
      scorecard.frames = Array(10).fill({ score: 7 })
      expect(scorecard.total()).toBe(70)
    })
  })

})
