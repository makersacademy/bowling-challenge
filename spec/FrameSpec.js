describe('Frame', function() {

  beforeEach(function() {
    frame = new Frame();
  });

  it('is comprised of two rolls by default',function() {
    expect(frame.rolls.length).toEqual(2);
  });

  it('is comprised of three rolls if the final frame',function() {
    frame = new Frame(isLastFrame = true);
    expect(frame.rolls.length).toEqual(3);
  });

  it('has a total score of 0 when created', function() {
    expect(frame.rollTotal()).toEqual(0);
  });

  it('knows what its total is', function() {
    frame.roll(6);
    frame.roll(3);
    expect(frame.rollTotal()).toEqual(9);
  });

  it('knows what its total is', function() {
    frame.roll(3);
    frame.roll(1);
    expect(frame.rollTotal()).toEqual(4);
  });

  it('knows what its total is - final frame', function() {
    frame = new Frame(isLastFrame = true);
    frame.roll(7);
    frame.roll(3);
    frame.roll(4);
    expect(frame.rollTotal()).toEqual(14);
  });

  it('knows what its total is - final frame', function() {
    frame = new Frame(isLastFrame = true);
    frame.roll(10);
    frame.roll(10);
    frame.roll(10);
    expect(frame.rollTotal()).toEqual(30);
  });

  it('knows if it is a strike', function() {
    frame.roll(10);
    expect(frame.isStrike()).toBe(true);
  });

  it('knows if it is not a strike', function() {
    frame.roll(5);
    frame.roll(5);
    expect(frame.isStrike()).toBe(false);
  });

  it('knows if it is a spare', function() {
    frame.roll(7);
    frame.roll(3);
    expect(frame.isSpare()).toBe(true);
  });

  it('knows if it is not a spare', function() {
    frame.roll(4);
    frame.roll(5);
    expect(frame.isSpare()).toBe(false);
  });

  it('knows if it will have a bonus to add', function() {
    frame.roll(4);
    frame.roll(6);
    expect(frame.hasBonus()).toBe(true);
  });

  it('knows if it is completed - open frame', function() {
    frame.roll(3);
    frame.roll(5);
    expect(frame.isOver()).toBe(true);
  });

  it('knows if it is not yet completed', function() {
    frame.roll(2);
    expect(frame.isOver()).toBe(false);
  });

  it('knows if it is completed - strike', function() {
    frame.roll(10);
    expect(frame.isOver()).toBe(true);
  });

  it('knows if it is completed - final frame (spare)', function() {
    frame = new Frame(isLastFrame = true);
    frame.roll(5);
    frame.roll(5);
    frame.roll(5);
    expect(frame.isOver()).toBe(true);
  });

  it('knows if it is completed - final frame', function() {
    frame = new Frame(isLastFrame = true);
    frame.roll(5);
    frame.roll(4);
    expect(frame.isOver()).toBe(true);
  });

  it('knows if it is not yet completed - final frame', function() {
    frame = new Frame(isLastFrame = true)
    frame.roll(10);
    frame.roll(10);
    expect(frame.isOver()).toBe(false);
  });

  it('knows how many of its rolls have been used', function() {
    frame.roll(5);
    frame.roll(5);
    expect(frame.rollsTaken()).toEqual(2);
  });

  it('knows how many of its rolls have been used', function() {
    frame.roll(10);
    expect(frame.rollsTaken()).toEqual(1);
  });

});