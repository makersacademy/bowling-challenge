describe("Frame", function() {
  it("captures score of first roll", function() {
    var frame = new Frame;
    frame.enterFirstRollScore(6);
    expect(frame.firstRollScore).toEqual(6);
  });

  it("adds first roll score to frame total", function() {
    var frame = new Frame;
    frame.enterFirstRollScore(6);
    expect(frame.basicScore).toEqual(6);
    expect(frame.totalScore).toEqual(6);
  });

  it("captures score of second roll", function() {
    var frame = new Frame;
    frame.enterFirstRollScore(6);
    frame.enterSecondRollScore(2);
    expect(frame.secondRollScore).toEqual(2);
  });

  it("adds second roll score to frame total", function() {
    var frame = new Frame;
    frame.enterFirstRollScore(6);
    frame.enterSecondRollScore(2);
    expect(frame.basicScore).toEqual(8);
    expect(frame.totalScore).toEqual(8);
  });
});