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

  // The player has a strike if he knocks down all 10 pins
  // with the first roll in a frame. The frame ends immediately
  // (since there are no pins left for a second roll). The
  // bonus for that frame is the number of pins knocked down
  // by the next two rolls. That would be the next frame,
  // unless the player rolls another strike.

  it('has only one roll total if the first roll is 10 (a strike)', function() {
    frame.roll(10)
    expect(frame._number_of_rolls).toEqual(1)
    expect(frame._scores.length).toEqual(1)
    expect(function() {
      frame.roll(3)
    }).toThrow(new Error('No more rolls this frame.'))
    expect(frame._number_of_rolls).toEqual(1)
    expect(frame._scores.length).toEqual(1)
  });

});
