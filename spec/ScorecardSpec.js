describe("Scorecard", function() {
  var scorecard;
  var fakeFrame = {
    totalScore: 5
  };

  beforeEach(function() {
    scorecard = new Scorecard;
  });
  
  it("records game as complete when 10 frames have been bowled", function() {
    scorecard.frames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(scorecard.isComplete()).toEqual(true);
  });
  
  it("shows total score of zero for gutter game", function() {
    fakeFrame.totalScore = 0;
    for (var i = 0; i < 10; i++) {
      scorecard.frames.push(fakeFrame);
    }
    expect(scorecard.calculateTotalScore()).toEqual(0);
  });

  it("captures frame when played", function() {
    scorecard.captureFrame(fakeFrame);
    expect(scorecard.frames.length).toEqual(1);
  });

  it("throws error if > 10 frames added", function() {
    scorecard.frames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(function() { scorecard.captureFrame(fakeFrame) }).toThrow(new Error(
      "Scorecard already contains the maximum 10 frames.")
    );
  });

  it("completes when 10th frame is added", function() {
    scorecard.frames = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(scorecard.isComplete()).toEqual(false);
    scorecard.captureFrame(fakeFrame);
    expect(scorecard.isComplete()).toEqual(true);
  });

  it("checks if previous frame was a spare", function() {
    var fakeSpareFrame = {
      spareFlag: true
    };
    scorecard.frames.push(fakeSpareFrame);
    scorecard.frames.push(fakeFrame);
    expect(scorecard.isPreviousFrameSpare(fakeFrame)).toBe(true);
  });

  it("checks if previous frame was a strike", function() {
    var fakeStrikeFrame = {
      strikeFlag: true
    };
    scorecard.frames.push(fakeStrikeFrame);
    scorecard.frames.push(fakeFrame);
    expect(scorecard.isPreviousFrameStrike(fakeFrame)).toBe(true);
  });

  it("checks if previous frame was a strike", function() {
    var fakeStrikeFrame = {
      strikeFlag: true
    };
    var fakeFrame3 = {
      totalScore: 5
    };
    scorecard.frames.push(fakeStrikeFrame);
    scorecard.frames.push(fakeFrame);
    scorecard.frames.push(fakeFrame3);
    expect(scorecard.isTwoFramesPreviousStrike(fakeFrame3)).toBe(true);
  });
});