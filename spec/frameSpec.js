describe ('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame;
  });

  describe('frame size', function() {
    it('can have at most two rolls', function() {
      frame.add_roll(3);
      frame.add_roll(6);
      expect(function(){frame.add_roll(4)}).toThrow(new Error('Each frame can have at most two rolls'));
    });
  });

});
