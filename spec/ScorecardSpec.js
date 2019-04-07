describe("Scorecard", function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard;
  });
  
  it("records game as complete when 10 frames have been bowled", function() {
    scorecard.frames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(scorecard.isComplete()).toEqual(true);
  });
  
  it("shows total score of zero for gutter game", function() {
    var fakeFrame = {
      totalScore: 0
    }
    for (var i = 0; i < 10; i++) {
      scorecard.frames.push(fakeFrame);
    }
    expect(scorecard.totalScore()).toEqual(0);
  });

  it("captures frame when played", function() {
    fakeFrame = {
      totalScore: 5
    }
    scorecard.captureFrame(fakeFrame);
    expect(scorecard.frames.length).toEqual(1);
  });
});