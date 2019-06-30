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

  it('keeps track of strikes', function() {
    frame.receiveRollOne(10); 
    expect(frame.strike).toBe(true);
  //  expect(frame.isStrike()).toBe(true);
  });

  it('keeps track of spares', function() {
    frame.receiveRollOne(5);
    frame.receiveRollTwo(5);
    expect(frame.spare).toBe(true);
    // expect(frame.isSpare()).toBe(true);
    // expect(frame.isStrike()).toBe(false);
  });

  it('keeps track of points', function() {
    frame.receiveRollOne(5);
    frame.receiveRollTwo(5);
    expect(frame.points).toEqual(10);
  });

  it('evaluates points', function() {
    frame.rollOne = 5;
    frame.rollTwo = 4;
    frame.evaluatePoints();
    expect(frame.points).toEqual(9);
    });
});