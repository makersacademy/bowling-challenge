describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  })

  it('records a player\'s rolls', function() {
    frame.record(1,5);
    expect(frame.rolls).toEqual([1, 5]);
  });

  it('calculates the score of a frame', function() {
    frame.record(1,5);
    frame.calculateScore();
    expect(frame.score).toEqual(6);
  });

});
