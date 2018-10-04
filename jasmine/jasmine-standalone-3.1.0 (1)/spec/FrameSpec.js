describe('Frame', function() {
  var frame;
  beforeEach(function() {
    frame = new Frame;
  })
  describe('frame', function() {
    it('has three rolls', function() {
      expect(frame.firstRoll).toEqual(null);
      expect(frame.secondRoll).toEqual(null);
      expect(frame.thirdRoll).toEqual(null);
    });

    it('calculates total', function() {
      frame.firstRoll = 4
      frame.secondRoll = 5
      expect(frame.total()).toEqual(9)
    });
  });
});
