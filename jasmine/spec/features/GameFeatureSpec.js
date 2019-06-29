// As a player I want to be able to be able to count and sum my scores
// so that I can keep track of my score.

describe("score a game story", function() {
  var scoreCard;

  beforeEach(function() {
    scoreCard = new Scorecard();
  });

  describe("score a game feature", function(){
    it("should sum the score from a single frame with no strikes or spares", function() {
      scoreCard.updateScore(2);
      scoreCard.updateScore(2);
      expect(scoreCard.getRunningTotal()).toEqual(4);
    });
  });

  describe("set up a new game feature", function(){
    it("should have a score of 0 and other defaults set", function() {
      expect(scoreCard.getRunningTotal()).toEqual(0);
      expect(scoreCard.nextRoll).toEqual(1);
      expect(scoreCard.nextFrame).toEqual(1);
      expect(scoreCard.frames.length).toEqual(10);
    });
  });

});
