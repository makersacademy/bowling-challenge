describe("Bowling Scorecard", function() {

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it("has ten frames", function() {
    expect(scorecard.frames).toEqual([[],[],[],[],[],[],[],[],[],[]]);
  });

  it("can add a score for the first bowl", function() {
    scorecard.addPoints(4);
    expect(scorecard.frames).toEqual([[4],[],[],[],[],[],[],[],[],[]]);
  });

  it("can add a score for the second bowl", function() {
    scorecard.addPoints(4);
    scorecard.addPoints(4);
    expect(scorecard.frames).toEqual([[4, 4],[],[],[],[],[],[],[],[],[]]);
  });

  it("moves to the next frame after two bowls", function() {
    scorecard.addPoints(4);
    scorecard.addPoints(4);
    scorecard.addPoints(4);
    expect(scorecard.frames).toEqual([[4, 4],[4],[],[],[],[],[],[],[],[]]);
  });

  it("moves to the next frame if ten points have been scored", function() {
    scorecard.addPoints(10);
    expect(scorecard.currentFrame).toBe(1);
  });


});