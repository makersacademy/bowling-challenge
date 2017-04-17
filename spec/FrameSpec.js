describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('can receive the first bowl', function() {
    frame.receiveBowl(1);
    expect(frame.firstBowl).toEqual(1);
  });

  it('can receive the second bowl', function() {
    frame.receiveBowl(1);
    frame.receiveBowl(2);
    expect(frame.secondBowl).toEqual(2);
  });

  it('can return the result of itself', function() {
    frame.receiveBowl(1);
    frame.receiveBowl(2);
    expect(frame.result).toEqual(3);
  });

  it('recognizes if a bowl is a strike', function() {
    expect(frame.isBowlAStrike(10)).toEqual(true);
  });

  it('recognizes if a frame is a strike', function() {
    frame.receiveBowl(10);
    expect(frame.spare).toEqual(false);
    expect(frame.strike).toEqual(true);
  });

  it('recognizes if a frame is a spare', function() {
    frame.receiveBowl(5);
    frame.receiveBowl(5);
    expect(frame.strike).toEqual(false);
    expect(frame.spare).toEqual(true);
  });
});