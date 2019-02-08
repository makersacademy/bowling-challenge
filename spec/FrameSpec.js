describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame;
  });

  it('should add the roll score to the roll', function() {
    frame.roll(3)
    frame.roll(2)
    final = [3, 2]
    expect(frame._scores).toEqual(final)
  });

  it('should have a default of two rolls', function() {
    frame.roll(3)
    frame.roll(3)
    expect(function() {
      frame.roll(3)
    }).toThrow(new Error('No more rolls this frame.'))
  });

});
