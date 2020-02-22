describe('Frame', function() {
  describe('at the start', function() {
    it('defaults both rolls as 0', function() {
      var frame = new Frame()
      expect(frame.roll_one).toEqual(0)
      expect(frame.roll_two).toEqual(0)
    })
  })
})