describe("Bowling", function() {

var scorecard = new Scorecard();

  it("can add points to a total score", function() {
    scorecard.addPoint(4);
    expect(scorecard.totalScore).toEqual(4);
  });

});