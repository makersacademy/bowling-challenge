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

});