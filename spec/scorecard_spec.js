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
    expect(scorecard.getCurrentFrameScore()).toEqual([3]);
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

  it('should end the game after frame 10', function() {
    scorecard.addScore(2);
    scorecard.addScore(7);
    scorecard.addScore(2);
    scorecard.addScore(7);
    scorecard.addScore(2);
    scorecard.addScore(7);
    scorecard.addScore(2);
    scorecard.addScore(7);
    scorecard.addScore(2);
    scorecard.addScore(7);
    scorecard.addScore(2);
    scorecard.addScore(7);
    scorecard.addScore(2);
    scorecard.addScore(7);
    scorecard.addScore(2);
    scorecard.addScore(7);
    scorecard.addScore(2);
    scorecard.addScore(7);
    scorecard.addScore(2);
    scorecard.addScore(7);
    expect(function() { scorecard.addScore(3) }).toThrow() 
  });

  it('should empty currentFrameScore after frame is completed', function() {
   scorecard.addScore(5);
   scorecard.addScore(4);
   expect(scorecard.getCurrentFrameScore()).toEqual([]); 
  });

  it('should end current frame if the player scores a strike', function() {
    scorecard.addScore(10);
    expect(scorecard.getCurrentFrame()).toEqual(2);
  });

  // returning the score for a game 

  it('should return 15 for a strike and a frame of [2, 3]', function() {
    scorecard.addScore(10);
    scorecard.addScore(2);
    scorecard.addScore(3);
    expect(scorecard.getScoreSoFar()).toEqual(15);
  });

  it('should return 18 when given [4, 5) and [3, 6]', function() {
      scorecard.addScore(4);
      scorecard.addScore(5);
      scorecard.addScore(3);
      scorecard.addScore(6);
      expect(scorecard.getScoreSoFar()).toEqual(18);
  });
  
});