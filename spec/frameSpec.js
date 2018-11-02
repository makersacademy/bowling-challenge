describe('Frame', function() {
  var frame;

  regular_frame = new Frame(3,4);
  spare_frame = new Frame(5,5);
  strike_frame = new Frame(10,0);

  describe('initialize', function() {
    it('has two rolls', function() {
      expect(regular_frame.roll1).toEqual(3);
      expect(regular_frame.roll2).toEqual(4);
    });
  });
});
