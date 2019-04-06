describe("Feature test:", function() {
  var scoreCard;
  var frame;

  beforeEach(function() {
    scoreCard = new ScoreCard();
    frame = new Frame();
  });

  describe("gutter game", function() {
    it("returns a total score of 0 after 10 frames", function() {
      frame.roll(0);
      frame.roll(0);
      for (let i = 0; i < 10; i++) {
        scoreCard.addFrameRolls(frame.rolls);
      }
      expect(scoreCard.seeRolls().length).toEqual(10);
      expect(scoreCard.totalScore()).toEqual(0);
    });
  });
});
