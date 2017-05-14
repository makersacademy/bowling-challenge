describe('Frame', function () {

  var frame;

  beforeEach(function () {
    frame = new Frame ();
  })

  describe('initialization', function () {
    it('can be created', function () {
      expect(frame instanceof Frame).toBe(true)
    })
  })

  describe('hit function', function () {
    it('drops a number of pins grom a given roll in a frame', function () {
      var rollIndex = 0
      var pinsDown = 5
      frame.hit(rollIndex, pinsDown)
      expect(frame._rolls[rollIndex]._pinsDown).toEqual(pinsDown)
      var rollIndex = 1
      var pinsDown = 8
      frame.hit(rollIndex, pinsDown)
      expect(frame._rolls[rollIndex]._pinsDown).toEqual(pinsDown)
    })
  })

  describe('spare', function () {
    it('can be determined', function () {
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

})
