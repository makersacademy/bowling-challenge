describe('Frame feature tests', function () {
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

  describe('After no rolls', function () {
    it('The game should have no frames', function () {
      expect(scorecard.frames.length).toBe(0)
    })
  })

  describe('After 1 gutterball', function () {
    beforeEach(function () {
      rollGutterballs(1)
    })

    it('The game should have 1 frame', function () {
      expect(scorecard.frames.length).toBe(1)
    })

    it('The frame should not be complete', function () {
      expect(scorecard.frames[0].isComplete()).toBe(false)
    })
  })

  describe('After 2 gutterballs', function () {
    beforeEach(function () {
      rollGutterballs(2)
    })

    it('The game should have 1 frame', function () {
      expect(scorecard.frames.length).toBe(1)
    })

    it('The frame should be complete', function () {
      expect(scorecard.frames[0].isComplete()).toBe(true)
    })
  })

  describe('After 3 gutterballs', function () {
    beforeEach(function () {
      rollGutterballs(3)
    })

    it('The game should have 2 frames', function () {
      expect(scorecard.frames.length).toBe(2)
    })

    it('The second frame should not be complete', function () {
      expect(scorecard.frames[1].isComplete()).toBe(false)
    })
  })
})
