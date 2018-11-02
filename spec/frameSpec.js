describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('initializes', function() {
    it('with 2 rolls', function() {
      expect(frame.ROLLS).toEqual(2);
    });
  });
});
