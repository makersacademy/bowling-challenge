describe('frames', function() {
  let frame = new Frame;

  describe('roll', function() {
    it ('should be empty before the first roll', function() {
      expect(frame.rolls).toEqual([])
    })
  })
})