describe ('Frame', function () {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('new', function() {
    it('starts as not complete', function() {
      expect(frame._isComplete).toBe(false);
    });
  });

  describe('add', function() {
    it('pins to the frame', function () {
      frame.add(5);
      expect(frame.pins).toEqual([5]);
    });
  });

  describe('setComplete', function() {
    it('sets frame to complete after 2 rolls', function() {
      frame.add(5);
      frame.add(3);
      expect(frame._isComplete).toBe(true);
    });
  });
});
