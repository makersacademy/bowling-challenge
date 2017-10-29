describe("ScoreSheet", function() {

  var scoresheet;

  beforeEach(function() {
    scoresheet = new ScoreSheet();
  });

  it("scoring begins at zero", function() {
    expect(scoresheet._currentScore).toEqual(0);
  });
});
