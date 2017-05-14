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

  describe('spare', function () {
    it('can be determined', function () {
      for(var i = 0; i < frame._rolls.length; i++) {
        frame._rolls[i]._pinsDown = 5
      }
      expect(frame.isSpare()).toBe(true)
    })
  })

  describe('strike', function () {
    it('can be determined', function () {
      frame._rolls[0]._pinsDown = 10
      expect(frame.isSpare()).toBe(true)
    })
  })

})
