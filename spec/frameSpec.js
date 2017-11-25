describe('Frame', function () {
  var frame

  beforeEach(function () {
    frame = new Frame ()
  })
  describe('#initialize', function () {
    it('should add tolls to the frame', function () {
      frame.addFrame(2, 3)
      expect(frame.rolls).toContain([2, 3])
    })
    it('should contain default strike status as false', function () {
      expect(frame.isStrike()).toBe(false)
    })
    it('should contain default spare status as false', function () {
      expect(frame.isSpare()).toBe(false)
    })
  })
})
