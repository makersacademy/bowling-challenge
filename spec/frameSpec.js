describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('adds a single bowl to the frame score', function() {
    frame.bowl(6);
    expect(frame.score).toContain(6);
  });

  it('allows a maximum of 10 pins to be recorded per frame', function() {
    frame.bowl(6);
    expect(frame.bowl(5)).toThrow('Error: please re-enter score')
  });

});
