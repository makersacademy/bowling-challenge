describe("Scorecard", function() {
  it("records game as complete when 10 frames have been bowled", function() {
    var scorecard = new Scorecard;
    scorecard.frames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(scorecard.isComplete()).toEqual(true);
  });
  
  it("shows total score of zero for gutter game", function() {
    var scorecard = new Scorecard;
    var fakeFrame = {
      totalScore: 0
    }
    for (var i = 0; i < 10; i++) {
      scorecard.frames.push(fakeFrame);
    }
    expect(scorecard.totalScore()).toEqual(0);
  });
});