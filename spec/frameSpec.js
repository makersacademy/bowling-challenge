describe('Frame', function () {
  var Frame = require('../js/frame.js')
  // var Roll = require('../js/roll')
  var frame;

  beforeEach(function () {
    frame = new Frame ();
  })

  describe('initialization', function () {
    it('frames can be created', function () {
      expect(frame instanceof Frame).toBe(true)
    })
    it('frames have a default score of 0', function () {
      expect(frame._score).toEqual(0)
    })
  })

  describe('score function', function () {
    it('returns the score attribute', function () {
      var score = 2
      frame._score = score
      expect(frame.scoreIs()).toEqual(score)
    })
  })
  describe('hit function', function () {
    it('drops a number of pins from a given roll in a frame', function () {
      var rollIndex = 0
      var pinsDown = 5
      frame.hit(rollIndex, pinsDown)
      expect(frame._rolls[rollIndex]._pinsDown).toEqual(pinsDown)
      var rollIndex = 1
      var pinsDown = 8
      frame.hit(rollIndex, pinsDown)
      expect(frame._rolls[rollIndex]._pinsDown).toEqual(pinsDown)
    })
    it('contributes to score for that frame', function () {
      var rollIndex = 0
      var pinsDown1 = 5
      frame.hit(rollIndex, pinsDown1)
      var rollIndex = 1
      var pinsDown2 = 4
      frame.hit(rollIndex, pinsDown2)
      expect(frame.scoreIs()).toEqual(pinsDown1 + pinsDown2)
    })
  })

  describe('spare', function () {
    it('can be confirmed', function () {
      var rollIndex = 0
      var pinsDown = 5
      frame.hit(rollIndex, pinsDown)
      var rollIndex = 1
      var pinsDown = 5
      frame.hit(rollIndex, pinsDown)
      expect(frame.isSpare()).toBe(true)
    })
    it('can be disproved', function () {
      var rollIndex = 0
      var pinsDown = 3
      frame.hit(rollIndex, pinsDown)
      var rollIndex = 1
      var pinsDown = 4
      frame.hit(rollIndex, pinsDown)
      expect(frame.isSpare()).toBe(false)
    })
  })

  describe('strike', function () {
    it('can be confirmed', function () {
      var rollIndex = 0
      var pinsDown = 10
      frame.hit(rollIndex, pinsDown)
      expect(frame.isStrike()).toBe(true)
    })

    it('can be disproved', function () {
      var rollIndex = 0
      var pinsDown = 9
      frame.hit(rollIndex, pinsDown)
      expect(frame.isStrike()).toBe(false)
    })
  })

  describe('returnRolls function', function () {
    it('returns unfinished rolls', function () {
      expect(frame.returnRolls().length).toEqual(2)
      var finishedRoll = frame._rolls[0]
      finishedRoll._finished = true
      expect(frame.returnRolls().length).toEqual(1)
      expect(frame.returnRolls().indexOf(finishedRoll)).toEqual(-1)
    })
  })

})
