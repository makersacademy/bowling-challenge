describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('initializes with 0 rolls', function() {
    expect(frame.rolls).toEqual(0)
  });
});
