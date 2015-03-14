describe("Bowling Scorecard", function() {

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it("has ten frames", function() {
    expect(scorecard.frames).toEqual([[],[],[],[],[],[],[],[],[],[]]);
  });

  it("can add a score for the first bowl", function() {
    scorecard.add_points(4);
    expect(scorecard.frames).toEqual([[4],[],[],[],[],[],[],[],[],[]]);
  });

  it("can add a score for the second bowl", function() {
    scorecard.add_points(4);
    scorecard.add_points(4);
    expect(scorecard.frames).toEqual([[4, 4],[],[],[],[],[],[],[],[],[]]);
  });

  it("moves to the next frame after two bowls", function() {
    scorecard.add_points(4);
    scorecard.add_points(4);
    scorecard.add_points(4);
    expect(scorecard.frames).toEqual([[4, 4],[4],[],[],[],[],[],[],[],[]]);
  });


});