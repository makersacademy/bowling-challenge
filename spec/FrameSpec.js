describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('launches with two empty rolls', function() {
    expect(frame.rollOne).toEqual(0);
    expect(frame.rollTwo).toEqual(0);
  });

  it('launches with strike and spare as false values', function() {
    expect(frame.strike).toBe(false);
    expect(frame.spare).toBe(false);
  });

  it('launches with no points', function() {
    expect(frame.points).toEqual(0);
  });

  it('keeps track of strikes', function() {
    frame.rollOne = 10; // rewrite as function?
    expect(frame.strike).toBe(true);
  });

  it('keeps track of spares', function() {
    frame.rollTwo = 10;
    expect(frame.spare).toBe(true);
    expect(frame.strike).toBe(false);
  });

  it('keeps track of spares by addition', function() {
    frame.rollOne = 5;
    frame.rollTwo = 5;
    expect(frame.spare).toBe(true);
    expect(frame.strike).toBe(false);
  });
});