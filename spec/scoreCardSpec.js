describe("ScoreCard", function() {

  var scoreCard = new ScoreCard();

  describe("At the start of a new game:", function () {
    it("begins the game with a blank scorecard", function() {
      expect(scoreCard.card).toEqual([]);
    });
  });

  describe("During the game:", function() {
    beforeEach(function() {
      array = new Array();
      array['frame'] = 1;
      array['frameScore'] = 8;
      array['runningScore'] = 8;
      scoreCard.update(array)
    });
    it("it recalls the frame score from frame 1", function() {
      expect(scoreCard.card[0].frameScore).toEqual(8)
    });
    it("it recalls the running score from frame 1", function() {
      expect(scoreCard.card[0].runningScore).toEqual(8)
    });
  });

})
