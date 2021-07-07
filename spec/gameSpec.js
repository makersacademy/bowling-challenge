describe ('Frame', function() {
  describe ('Roll', function() {
    it ('Should increase the score by the number of pins dropped', function() {
      frame = new Frame();
      frame.roll(8);
      expect(frame._score).toBe(8);
    })
  })
})
