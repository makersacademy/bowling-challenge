describe('Frame', function () {
  var frame

  beforeEach(function () {
    frame = new Frame ()
  })
  describe('#initialize', function () {
    it('should add rolls to the frame', function () {
      frame = new Frame (0, 0)
      expect(frame.rolls).toEqual([0, 0])
    })
    it('should contain default strike status as false', function () {
      expect(frame.strike).toBe(false)
    })
    it('should contain default spare status as false', function () {
      expect(frame.spare).toBe(false)
    })
  })
})
