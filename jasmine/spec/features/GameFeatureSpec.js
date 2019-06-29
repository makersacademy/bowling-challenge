// As a player I want to be able to be able to count and sum my scores
// so that I can keep track of my score.

describe("score a game", function() {
  var scoreCard;

  beforeEach(function() {
    scoreCard = new Scorecard();
  });

  it("should sum the score from a single frame with no strikes or spares", function() {
    scoreCard.updateScore(2);
    scoreCard.updateScore(2);
    expect(scoreCard.getRunningTotal()).toEqual(4);
  });

});
