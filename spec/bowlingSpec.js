describe("ScoreCard", function() {

  beforeEach(function() {
    scorecard = new ScoreCard();
  });

    describe("initization", function() {

      it("should initiaze with an array to input scores", function() {
        expect(scorecard.scoreTracker).toEqual([[], [], [], [], [], [], [], [], [], []]);
      });

    });

    describe("adding scores", function() {

      it("should add a score to the tracker", function() {
        scorecard.add(3, 0);
        expect(scorecard.scoreTracker[0]).toEqual([3]);
      });

      it("should let you add a second score if first is not a strike", function() {
        scorecard.add(3, 0);
        scorecard.add(6, 0);
        expect(scorecard.scoreTracker[0]).toEqual([3,6]);
      });

    });

    describe("calculating scores", function() {

      it("should calculate 2 scores from a round", function() {
        scorecard.add(3, 0);
        scorecard.add(6, 0);
        expect(scorecard.calculateScore(0)).toEqual(9);
      });

      it("should calculate the score from several rounds", function() {
        scorecard.add(1, 0);
        scorecard.add(1, 0);
        scorecard.add(1, 1);
        scorecard.add(1, 1);
        scorecard.add(1, 2);
        scorecard.add(1, 2);
        expect(scorecard.calculateScore(2)).toEqual(6);
      });

      it("should't add the score be added on till next round for a strike", function() {
        scorecard.add(1, 0);
        scorecard.add(1, 0);
        scorecard.add(10, 1);
        scorecard.add(1, 1);
        expect(scorecard.calculateScore(1)).toEqual(2);
      });

      it("shouldn't add the score should't be added on till next round for a strike", function() {
        scorecard.add(1, 0);
        scorecard.add(1, 0);
        scorecard.add(10, 1);
        scorecard.add(1, 2);
        scorecard.add(1, 2);
        expect(scorecard.calculateScore(2)).toEqual(16);
      });

      it("should't add the score be added on till next round for a spare", function() {
        scorecard.add(1, 0);
        scorecard.add(1, 0);
        scorecard.add(9, 1);
        scorecard.add(1, 1);
        expect(scorecard.calculateScore(1)).toEqual(2);
      });

      it("shouldn't add the score should't be added on till next round for a spare", function() {
        scorecard.add(1, 0);
        scorecard.add(1, 0);
        scorecard.add(9, 1);
        scorecard.add(1, 1);
        scorecard.add(1, 2);
        scorecard.add(1, 2);
        expect(scorecard.calculateScore(2)).toEqual(15);
      });

    });

});
