describe('Frame', function() {

  var frame;
  beforeEach(function() {
    frame = new Frame();
  });

  it('is empty on initialisation', function() {
    expect(frame.first).toBe(null);
    expect(frame.second).toBe(null);
  });

  it('can be set with a pair of shots', function() {
    frame.setShots(4, 5);
    expect(frame.first).toBe(4);
    expect(frame.second).toBe(5);
  });

  it('recognises a strike', function() {
    frame.setShots(10);
    expect(frame.isStrike()).toBe(true);
    expect(frame.isSpare()).toBe(false);
  });

  it('recognises a spare', function() {
    frame.setShots(7, 3);
    expect(frame.isStrike()).toBe(false);
    expect(frame.isSpare()).toBe(true);
  });

  it('recognises ordinary frames', function() {
    frame.setShots(6, 3);
    expect(frame.isStrike()).toBe(false);
    expect(frame.isSpare()).toBe(false);
  });

});
