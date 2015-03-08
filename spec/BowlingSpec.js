describe("Bowling", function() {

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it("can add points to a total score", function() {
    scorecard.addPoint(4);
    expect(scorecard.totalScore).toEqual(4);
  });

  it("doesn't move to the next frame after only one bowl has been added", function() {
    scorecard.addPoint(4);
    expect(scorecard.currentFrame).toEqual(1);
  });

  it("moves to the next frame after two bowls have been added", function() {
    scorecard.addPoint(4);
    scorecard.addPoint(4);
    expect(scorecard.currentFrame).toEqual(2);
  });



});