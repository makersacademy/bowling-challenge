describe("Scorecard", function() {
  var scorecard;
  var frame;
  var frame1;

  beforeEach(function() {
    scorecard = new Scorecard();
    frame = new Frame();
    frame1 = new Frame();
  });

  describe("frameResults", function() {
    it("Should be set to an empty array by default", function() {
      expect(scorecard.frameResults).toEqual([])
    });
  });

  describe("addFrame", function() {
    it("Should add a frame function into the frameResults array", function() {
      scorecard.addFrame(frame);
      expect(scorecard.frameResults).toEqual([frame])
    });
  });

  describe("frameScores", function() {
    it("Should be an empty array by default", function() {
      expect(scorecard.frameScores).toEqual([])
    });

    it("Calling updateScores should set it to [7]", function() {
      frame.setBowlOneScore(5);
      frame.setBowlTwoScore(2);
      frame.setFrameScore();
      scorecard.addFrame(frame);
      scorecard.updateScores();
      expect(scorecard.frameScores).toEqual([7])
    });

    it("Scoring a spare should add the score of the next bowl onto the score", function() {
      frame.setBowlOneScore(7);
      frame.setBowlTwoScore(3);
      frame.setFrameScore();
      scorecard.addFrame(frame);
      scorecard.updateScores();
      frame1.setBowlOneScore(6);
      frame1.setBowlTwoScore(2);
      frame1.setFrameScore();
      scorecard.addFrame(frame1);
      scorecard.updateScores();
      expect(scorecard.frameScores[0]).toEqual(16)
    });

    it("Scoring a strike should add the score of the next two bowls onto the score", function() {
      frame.setBowlOneScore(10);
      frame.setFrameScore();
      scorecard.addFrame(frame);
      frame1.setBowlOneScore(4);
      frame1.setBowlTwoScore(4);
      frame1.setFrameScore();
      scorecard.addFrame(frame1);
      scorecard.updateScores();
      expect(scorecard.frameScores[0]).toEqual(18)
    })
  });
});
