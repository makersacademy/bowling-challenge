describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame(0);
  });

  it('should return frame number as 0', function() {
    expect(frame.frameNumber).toEqual(0);
  });

});
