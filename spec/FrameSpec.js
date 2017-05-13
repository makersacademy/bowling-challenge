describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });
  describe('frameNo variable', function() {
    it('Can be assigned a frame number but has a default value of 1 if not assigned', function() {
      expect(frame.frameNo).toEqual(1);
    });
    it('equals 2 if assigned a value of 2 upon instantion', function() {
      frame = new Frame(2);
      expect(frame.frameNo).toEqual(2);
    });
  });

});
