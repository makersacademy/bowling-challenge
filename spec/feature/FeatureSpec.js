describe('Feature tests', function () {
  var Scorecard = require('../../lib/Scorecard')
  var scorecard

  beforeEach(function() {
    scorecard = new Scorecard()
  })

  describe('20 gutter balls in a row', function () {
    it('The game should be complete with a score of 0', function () {
      for (var i = 0; i < 20; i++) {
        scorecard.roll(0)
      }

      expect(scorecard.isComplete()).toBe(true)
      expect(scorecard.total()).toBe(0)
    })
  })

  describe('19 gutter balls in a row', function () {
    it('The game should not be complete with a score of 0', function () {
      for (var i = 0; i < 19; i++) {
        scorecard.roll(0)
      }

      expect(scorecard.isComplete()).toBe(false)
      expect(scorecard.total()).toBe(0)
    })
  })

  describe('Frames', function () {
    describe('After no rolls', function () {
      it('The game should have no frames', function () {
        expect(scorecard.frames.length).toBe(0)
      })
    })

    describe('After 1 gutterball', function () {
      it('The game should have 1 frame', function () {
        scorecard.roll(0)
        expect(scorecard.frames.length).toBe(1)
      })
    })

    describe('After 2 gutterballs', function () {
      it('The game should have 1 frame', function () {
        scorecard.roll(0)
        scorecard.roll(0)
        expect(scorecard.frames.length).toBe(1)
      })
    })

    describe('After 3 gutterballs', function () {
      it('The game should have 2 frames', function () {
        for (var i = 0; i < 3; i++) {
          scorecard.roll(0)
        }
        expect(scorecard.frames.length).toBe(2)
      })
    })
  })
})
