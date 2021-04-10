describe('frames', function() {
  let frame = new Frame;

  describe('roll', function() {
    it ('should be empty before the first roll', function() {
      expect(frame.rolls).toEqual([])
    });
    it ('can receive user input and save it', function() {
      frame.roll(3)
      frame.roll(5)

      expect(frame.rolls).toEqual([3, 5])
    });
  });
});