describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("can record a first roll", function() {
    frame.setFirstRollValue(1);
    expect(frame.firstRollValue).toEqual(1);
  });

  it("can record a second roll", function() {
    frame.setFirstRollValue(1);
    frame.setSecondRollValue(9);
    expect(frame.secondRollValue).toEqual(9);
  });

  it("can record a strike", function() {
    frame.setFirstRollValue(10);
    expect(frame.isStrike).toEqual(true);
  });

  it("can record a spare", function() {
    frame.setFirstRollValue(1);
    frame.setSecondRollValue(9);
    expect(frame.isSpare).toEqual(true);
  });

  it("can record a score", function() {
    frame.setFirstRollValue(1);
    frame.setSecondRollValue(4);
    expect(frame.score).toEqual(5);
  });

  it("can record a score later", function() {
    frame.setFirstRollValue(1);
    frame.setSecondRollValue(9);
    frame.setScore(13);
    expect(frame.score).toEqual(13);
  });

});
