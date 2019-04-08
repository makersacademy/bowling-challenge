describe('Scorecard', function () {
  var scorecard, frame

  if (typeof(require) !== 'undefined') {
    Scorecard = require('../src/Scorecard')
  }
  
  beforeEach(function () {
    scorecard = new Scorecard()
  })

  describe('.total', function () {
    it('The total should be the sum of the frame scores', function () {
      scorecard.frames = Array(10).fill({ score: 7 })
      expect(scorecard.total()).toBe(70)
    })
  })

  describe('Calculating frame scores', function () {
    describe('If a frame contains two rolls and is not a spare', function () {
      it('It is scored immediately', function () {
        scorecard.roll(5)
        scorecard.roll(4)
        expect(scorecard.frames[0].score).toBe(9)
      })
    })
  })
})
