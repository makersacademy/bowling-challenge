describe ("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame;
  });

  it("starts with a score of zero", function() {
    expect(frame.score).toBe(0);
  });

  it("can identify a Spare", function() {
    player.roll(4, 6);
    expect(frame.isSpare).toEqual(true);
  });

  it("can identify a Strike", function() {
    player.roll(10);
    expect(frame.isStrike).toEqual(true);
  });

  it("can calculate a bonus roll", function() {
  });

});

