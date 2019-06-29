describe("Scorecard", function() {
  var scorecard;

  beforeEach(function() {
    scoreCard = new Scorecard();
  });

  describe("#updateScore", function(){
    it("should be able to update the score", function() {
      scoreCard.updateScore(2);
      expect(scoreCard.getRunningTotal()).toEqual(2);
    });

    it("should set the number of the next frame and roll correctly when first roll of frame is not a strike in first frame", function() {
      scoreCard.updateScore(2);
      expect(scoreCard.nextFrame).toEqual(1);
      expect(scoreCard.nextRoll).toEqual(2);
    });

    it("should set the number of the next frame and roll correctly when first roll of frame is a strike in the first frame", function() {
      scoreCard.updateScore(10);
      expect(scoreCard.nextFrame).toEqual(2);
      expect(scoreCard.nextRoll).toEqual(1);
    });

  });
});
