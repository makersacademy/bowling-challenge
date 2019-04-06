describe("Scorecard", function() {
  it("records game as complete when 10 frames have been bowled", function() {
    scorecard = new Scorecard;
    scorecard.frames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(scorecard.isComplete()).toEqual(true);
  });
});