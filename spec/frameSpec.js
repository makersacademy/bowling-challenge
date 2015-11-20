describe('Frame', function() {
  it ('Can recognise a strike when it sees one', function() {
    frame = new Frame(1);
    frame.setBall(10)
    expect(frame.isStrike()).toBe(true);
  });

  it ('Does not recognise a strike as a spare', function() {
    frame = new Frame(1);
    frame.setBall(10)
    expect(frame.isSpare()).toBe(false);
  });

  it ('Can recognise a spare when it sees one', function() {
    frame = new Frame(1);
    frame.setBall(3);
    frame.setBall(7)
    expect(frame.isSpare()).toBe(true);
  });

  it ('Does not recognise a spare asa strike', function() {
    frame = new Frame(1);
    frame.setBall(3);
    frame.setBall(7)
    expect(frame.isStrike()).toBe(false);
  });
  it ('can total up the pins knocked down in a frame', function() {
    frame = new Frame(1);
    frame.setBall(1);
    frame.setBall(3);
    expect(frame.total()).toEqual(4);
  });

  it ('knows a score can be finalised when not a strike or spare', function() {
    frame = new Frame(1);
    frame.setBall(2);
    frame.setBall(3);
    expect(frame.scoreCanBeFinalised()).toBe(true);
  });
  it ('knows a score cannot be finalised when a strike', function() {
    frame = new Frame(1);
    frame.setBall(10);
    expect(frame.scoreCanBeFinalised()).toBe(false);
  });
  it ('knows a score cannot be finalised when a spare', function() {
    frame = new Frame(1);
    frame.setBall(5);
    frame.setBall(5);
    expect(frame.scoreCanBeFinalised()).toBe(false);
  });
});
