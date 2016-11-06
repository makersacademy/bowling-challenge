describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('adds a single bowl to the frame score', function() {
    frame.bowl(6);
    expect(frame.rolls).toContain(6);
  });

  it('allows a maximum of 10 pins to be recorded per frame', function() {
    frame.bowl(6);
    expect(function(){frame.bowl(5)}).toThrowError('Please re-enter correct score')
  });

});
