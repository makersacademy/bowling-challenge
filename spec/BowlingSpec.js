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

  it("keeps a running total of the score across all frames", function() {
    scorecard.addPoints(4);
    scorecard.addPoints(4);
    scorecard.addPoints(10);
    expect(scorecard.calculateTotalScore()).toBe(18);
  });

  it("tracks which ball number belongs to which frame", function() {
    scorecard.addPoints(10);
    scorecard.addPoints(4);
    scorecard.addPoints(4);
    expect(scorecard.allBalls).toEqual({1:[0, 0], 2:[1, 0], 3:[1, 1]});
  });

  it("adds the score of the next two bowls to a strike", function() {
    scorecard.addPoints(1);
    scorecard.addPoints(1);
    scorecard.addPoints(10);
    scorecard.addPoints(10);
    scorecard.addPoints(10);
    scorecard.addPoints(4);
    scorecard.addPoints(3);
    scorecard.addPoints(2);
    scorecard.addPoints(0);
    expect(scorecard.calculateTotalScore()).toBe(82);
  });

  it("adds the score of the next one bowl to a spare", function() {
    scorecard.addPoints(4);
    scorecard.addPoints(6);
    scorecard.addPoints(4);
    expect(scorecard.calculateTotalScore()).toBe(18);
  });

  it("another test for spares and strikes together", function() {
    scorecard.addPoints(2);
    scorecard.addPoints(8);
    scorecard.addPoints(10);
    scorecard.addPoints(10);
    scorecard.addPoints(4);
    scorecard.addPoints(2);
    scorecard.addPoints(9);
    scorecard.addPoints(1);
    scorecard.addPoints(0);
    scorecard.addPoints(10);
    scorecard.addPoints(10);
    scorecard.addPoints(10);
    scorecard.addPoints(3);
    scorecard.addPoints(2);
    expect(scorecard.calculateTotalScore()).toBe(139);
  });

});