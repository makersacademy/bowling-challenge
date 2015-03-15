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

  it("a maximum of three balls can be rolled in the tenth frame when there's a strike or spare", function() {
    scorecard.currentFrame = 9;
    scorecard.addPoints(10);
    expect(scorecard.currentFrame).toBe(9);
    expect(scorecard.currentBowl).toEqual(1);
    scorecard.addPoints(4);
    expect(scorecard.currentBowl).toEqual(2);
    scorecard.addPoints(4);
    expect(scorecard.currentBowl).toEqual(3);
    expect(scorecard.isTheGameOver).toEqual(true);
  });

  it("doesn't allow three balls in the tenth frame if there were no spares or strikes", function() {
    scorecard.currentFrame = 9;
    scorecard.addPoints(4);
    scorecard.addPoints(4);
    expect(scorecard.isTheGameOver).toEqual(true);
  });

  it("only adds the bonus points for additional rolls in the final frame, they don't count as extra frames themselves", function() {
    scorecard.currentFrame = 9;
    scorecard.addPoints(10);
    scorecard.addPoints(10);
    scorecard.addPoints(10);
    expect(scorecard.calculateTotalScore()).toBe(30);
  });

  
  it("gives a total score of 150 when all bowls are 5 points", function() {
    for(i = 1; i < 22; i++) {
      scorecard.addPoints(5);  
    };
    expect(scorecard.calculateTotalScore()).toBe(150);
    expect(scorecard.isTheGameOver).toBe(true);
  });

  it("can calculate the remaining points needed for a spare", function() {
    scorecard.addPoints(5);
    expect(scorecard.pointsNeededForSpare()).toBe(5);
  });

});