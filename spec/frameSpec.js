describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('initializes', function() {
    it('with 2 rolls', function() {
      expect(frame.ROLLS).toEqual(2);
    });

    it('with a rolls array', function() {
      expect(frame.rolls_array).toEqual(Array());
    });
  });
});
