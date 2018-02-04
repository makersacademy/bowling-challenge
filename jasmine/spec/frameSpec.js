describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('add bowl', function() {
    it('sets the first bowl value to the score', function() {
      frame.addBowl(4);
      expect(frame.firstBowl).toEqual(4);
    });

    it('sets the second bowl value to the score', function() {
      frame.addBowl(4);
      frame.addBowl(5)
      expect(frame.secondBowl).toEqual(5);
    });
  });
});
