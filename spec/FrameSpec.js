describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame;
    frame.enterFirstRollScore(6);
  });
  
  it("captures score of first roll", function() {
    expect(frame.firstRollScore).toEqual(6);
  });

  it("adds first roll score to frame total", function() {
    expect(frame.calculateTotalScore()).toEqual(6);
  });

  it("captures score of second roll", function() {
    frame.enterSecondRollScore(2);
    expect(frame.secondRollScore).toEqual(2);
  });

  it("adds second roll score to frame total", function() {
    frame.enterSecondRollScore(2);
    expect(frame.calculateTotalScore()).toEqual(8);
  });
});