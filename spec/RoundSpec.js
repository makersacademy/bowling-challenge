describe('frame', function() {
  beforeEach(function() {
    frame = new Frame();
  });

  it('stores pins boweld', function() {
    frame.bowl(8)
    frame.bowl(1)
    expect(frame.score).toEqual(9)
  });

  it('knows if it\'s a strike', function() {
    frame.bowl(10)
    expect(frame.strike).toBe(true)
    expect(frame.spare).toBe(false)
  });

  it('knows if it\'s a spare', function() {
    frame.bowl(5)
    frame.bowl(5)
    expect(frame.spare).toBe(true)
    expect(frame.strike).toBe(false)
  });

  it('knows the frame is over', function() {
    frame.bowl(10)
    expect(frame.end).toBe(true)
  });

  it('cannot have a score higher than 10', function() {
    frame.bowl(5)
    frame.bowl(6)
    expect(frame.score).toEqual(5)
  });

});
