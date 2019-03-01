describe('Frame', function() {
  beforeEach(function() {
    frame1 = new Frame();
    frame2 = new Frame();
  });

  it('has no rolls when it starts', function() {
    expect(frame1.rolls.length).toEqual(0);
  });

  it('has a score of 0 when it starts', function() {
    expect(frame1.score).toEqual(0);
  });

  it('knows if a player\'s roll is a strike', function() {
    frame1.roll(10);
    expect(frame1.isStrike()).toEqual(true);
    frame2.roll(3);
    expect(frame2.isStrike()).toEqual(false);
  });

  it('knows if a player\'s roll is a spare', function() {
    frame1.roll(5);
    frame1.roll(5);
    expect(frame1.isSpare()).toEqual(true);
    frame2.roll(3);
    frame2.roll(3);
    expect(frame2.isSpare()).toEqual(false);
  });

  it('adds the roll results to rolls', function() {
    frame1.roll(3);
    frame1.roll(6);
    expect(frame1.rolls[0]).toEqual(3);
    expect(frame1.rolls[1]).toEqual(6);
    frame2.roll(10);
    expect(frame2.rolls[0]).toEqual(10);
    expect(frame2.rolls[1]).toEqual(0);
  });

  it('calculates the score of the frame', function() {
    frame1.roll(3);
    frame1.roll(3);
    expect(frame1.calculateScore()).toEqual(6);
  });
});
