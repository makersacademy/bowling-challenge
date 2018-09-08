describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("should be able to return the score", function() {
    expect(frame.getScore()).toEqual(0);
  });

  it("should be able to accept roll and return score", function() {
    expect(frame.getScore()).toEqual(0);
    frame.roll(3);
    expect(frame.getScore()).toEqual(3);
  });

  it("returns true for a strike", function() {
    expect(frame.getScore()).toEqual(0);
    frame.roll(10);
    expect(frame.isStrike()).toEqual(true);
  });

  it("return if another bowl can be taken", function() {
    expect(frame.getScore()).toEqual(0);
    frame.roll(5);
    expect(frame.isGetAnotherBowl()).toEqual(true);
  });

  // it("should be able to return a spare", function() {
  //   expect(frame.getScore()).toEqual(0);
  //   frame.roll(5);
  //   frame.roll(5);
  //   expect(frame.isSpare()).toEqual(true);
  // });
});
