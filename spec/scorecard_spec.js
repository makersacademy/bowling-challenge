describe("Scorecard", function() {
  var scorecard 

  beforeEach(function() {
    scorecard = new Scorecard 
  });

  it('should begin a game with a score of 0', function() {
    expect(scorecard.getCurrentScore()).toEqual(0);
  });

  it('should allow player to enter a score', function() {
    scorecard.addScore(5);
    expect(scorecard.getCurrentScore()).toEqual(5);
  });

  it('should allow the user to see their current score for a frame', function() {
    scorecard.addScore(3);
    scorecard.addScore(5);
    expect(scorecard.getCurrentFrameScore()).toEqual([3, 5]);
  });

  it('should allow the user to see the current frame', function() {
    expect(scorecard.getCurrentFrame()).toEqual(1);
  });

  it('should push the currentFrameScore to the frameScores once complete', function() {
    scorecard.addScore(4);
    scorecard.addScore(1);
    expect(scorecard.frameScores).toEqual([[4,1]]);
  });

  it('should increase the currentFrameCount by 1 after a frame has been completed', function() {
    scorecard.addScore(2);
    scorecard.addScore(7);
    expect(scorecard.getCurrentFrame()).toEqual(2);
  });

});