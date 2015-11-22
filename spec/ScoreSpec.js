describe("Score", function() {
  var score;
  var frameSet;

  beforeEach(function() {
    frameSet = {
      currentFrame: "frame2",
      previousFrame: "frame1"
    };
    score = new Score(frameSet);
  });

  describe("#Frame numbers provide:", function() {

    it("The current frame number", function() {
      expect(score.currentFrame()).toEqual("frame2");
    });

    it("The previous frame number", function() {
      expect(score.previousFrame()).toEqual("frame1");
    });
  });

  describe("Current scores provide:", function() {

    it("The #currentRoll1Score", function() {
      score.scorecard[score.currentFrame()].roll1 = 7
      expect(score.currentRoll1Score()).toEqual(7);
    });

    it("The #currentRoll2Score", function() {
      score.scorecard[score.currentFrame()].roll2 = 3
      expect(score.currentRoll2Score()).toEqual(3);
    });

    it("The #currentFrameScore", function() {
      score.scorecard[score.currentFrame()].roll1 = 7
      score.scorecard[score.currentFrame()].roll2 = 3
      expect(score.currentFrameScore()).toEqual(10);
    });
  });

  describe("Previous scores provide:", function() {

    it("The #previousRoll1Score", function() {
      score.scorecard[score.previousFrame()].roll1 = 4
      expect(score.previousRoll1Score()).toEqual(4);
    });

    it("The #previousRoll2Score", function() {
      score.scorecard[score.previousFrame()].roll2 = 5
      expect(score.previousRoll2Score()).toEqual(5);
    });
  });

  describe("#calculateFrameScore", function() {

    it("Adds the current frame score to the scorecard", function() {
      score.scorecard[score.currentFrame()].roll1 = 7
      score.scorecard[score.currentFrame()].roll2 = 3
      score.calculateFrameScore();
      expect(score.scorecard[score.currentFrame()].frameScore).toEqual(10);
    });
  });

  describe("#addStrikeBonuses", function() {

    it("Adds strike bonus points to the previous frame score", function() {
      spyOn(score, 'previousRoll1Score').and.returnValue(10);
      score.scorecard[score.previousFrame()].frameScore = 10;
      spyOn(score, 'currentFrameScore').and.returnValue(8);
      score.addStrikeBonuses();
      expect(score.scorecard[score.previousFrame()].frameScore).toEqual(18);
    });
  });

  describe("#addSpareBonuses", function() {

    it("Adds spare bonus points to the previous frame score", function() {
      spyOn(score, 'previousRoll1Score').and.returnValue(6);
      spyOn(score, 'previousRoll2Score').and.returnValue(4);
      score.scorecard[score.previousFrame()].frameScore = 10;
      spyOn(score, 'currentRoll1Score').and.returnValue(3);
      score.addSpareBonuses();
      expect(score.scorecard[score.previousFrame()].frameScore).toEqual(13);
    });
  });

  describe("#noStrike", function() {

    it("Confirms if no strike was made in the previous frame", function () {
      expect(score.noStrike()).toEqual(true);
    });
  });

  describe("Frame 10:", function() {

    it("#frame10Strike checks if a strike was made in frame 10", function() {
      expect(score.frame10Strike()).toEqual(false);
    });

    it("#frame10NoStrike checks if no strike was made in frame 10", function() {
      expect(score.frame10NoStrike()).toEqual(true);
    });

    it("#frame10Spare checks if a spare was made in frame 10", function() {
      expect(score.frame10Spare()).toEqual(false);
    });
  });
});
