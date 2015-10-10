describe("ScoreCard", function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new ScoreCard();
  });

  describe("Frames", function() {
    it("begins on first frame", function() {
      expect(scorecard.frame).toEqual(1);
    });

    it("should keep track of frames", function() {
      scorecard.moveFrame();
      expect(scorecard.frame).toEqual(2);
    });

    it("has a limit of 10 frames", function() {
      for(var i = 0; i < 10; i++) {
        scorecard.moveFrame();
      }
      expect(scorecard.moveFrame()).toEqual("Game Over!");
    });
  });

  describe("Pins", function() {
    it("begins each frame with 10 pins", function() {
      scorecard.scoreBowl(5);
      scorecard.scoreBowl(4);
      expect(scorecard.pins).toEqual(10);
    });

    it("should keep track of pins", function() {
      scorecard.scoreBowl(5);
      expect(scorecard.pins).toEqual(5);
    });
  });

  describe("Bowl", function() {
    it("begins each frame on first bowl", function() {
      expect(scorecard.bowl).toEqual(1);
    });

    it("should keep track of which bowl the game is on", function() {
      scorecard.nextBowl();
      expect(scorecard.bowl).toEqual(2);
    });

    it("should move to next frame after a strike", function() {
      scorecard.scoreBowl(10);
      expect(scorecard.frame).toEqual(2);
    });

    it("should move to next frame after two bowls", function() {
      scorecard.scoreBowl(5);
      scorecard.scoreBowl(4);
      expect(scorecard.frame).toEqual(2);
    });
  });

  describe("Score", function() {
    it("should be record for each bowl", function() {
      scorecard.scoreBowl(5);
      scorecard.scoreBowl(4);
      expect(scorecard.score[1]).toEqual([5, 4]);
    });

    it("can be calculated for each frame", function() {
      scorecard.scoreBowl(5);
      scorecard.scoreBowl(4);
      expect(scorecard.frameScore(1)).toEqual(9)
    });

    it("can add bonus points for a strike", function() {
      scorecard.scoreBowl(10);
      scorecard.scoreBowl(5);
      scorecard.scoreBowl(4);
      scorecard.bonusForStrike();
      expect(scorecard.frameScore(1)).toEqual(19);
    });

    it("can add bonus points for a spare", function() {
      scorecard.scoreBowl(5);
      scorecard.scoreBowl(5);
      scorecard.scoreBowl(4);
      scorecard.scoreBowl(0);
      scorecard.bonusForSpare();
      expect(scorecard.frameScore(1)).toEqual(14);
    });

    describe("10th Frame", function() {
      it("allows a bonus bowl if a strike or spare is scored", function() {
        for(var i = 0; i < 10; i++) {
          scorecard.moveFrame();
        }
        scorecard.scoreBowl(5);
        scorecard.scoreBowl(5);
        expect(scorecard.bowl).toEqual(3)
      });
    });
  });
});
