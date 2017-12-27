describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('initializes with 0 rolls', function() {
    expect(frame.rolls).toEqual(0);
  });

  it('should increase current roll from 0 to 1 after first roll', function() {
    expect(frame.currentRoll()).toEqual(1);
  });

});
