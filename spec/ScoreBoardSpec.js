describe("ScoreBoard", function() {
  var scoreBoard;

  beforeEach(function() {
    scoreBoard = new ScoreBoard;
  });

  it("should have frames", function() {
    expect(scoreBoard.frames[0]).toBeInstanceOf(Frame);
  });

  describe("Strike", function() {
    beforeEach(function() {
      scoreBoard.addScore(10);
      scoreBoard.addScore(10);
      scoreBoard.addScore(10);
    });

    it("scoreboard should be on 3rd frame", function() {
      expect(scoreBoard.currentFrame.index).toEqual(2);
    });

    it("first frame should have score of 30", function() {
      expect(scoreBoard.frames[0].score()).toEqual(30);
    });
  });

  describe("Spare", function() {
    beforeEach(function() {
      scoreBoard.addScore(9);
      scoreBoard.addScore(1);
      scoreBoard.addScore(10);
    });

    it("scoreboard should be on 2nd frame", function() {
      expect(scoreBoard.currentFrame.index).toEqual(1);
    });

    it("first frame should have score of 20", function() {
      expect(scoreBoard.frames[0].score()).toEqual(20);
    });
  });

  describe("Random Scores", function() {
    beforeEach(function() {
      rolls = [3, 2, 5, 5, 10, 10, 2, 7, 8, 2, 6, 4, 5, 4, 7, 3, 10, 9, 1]
      for (var i = 0; i < rolls.length; i++) {
        scoreBoard.addScore(rolls[i]);
      };
    });

    it("should be on correct frame", function() {
      expect(scoreBoard.currentFrame.index).toEqual(9)
    });

    it("frame 1 should have correct score", function() {
      frameOne = scoreBoard.frames[0];
      expect(frameOne.score()).toEqual(5);
    });

    it("frame 2 should have correct score", function() {
      frameTwo = scoreBoard.frames[1];
      expect(frameTwo.score()).toEqual(25);
    });

    it("frame 3 should have correct score", function() {
      frameThree = scoreBoard.frames[2];
      expect(frameThree.score()).toEqual(47);
    });

    it("frame 8 should have correct score", function() {
      frameEight = scoreBoard.frames[7];
      expect(frameEight.score()).toEqual(115);
    });

    it("frame 9 should have correct score", function() {
      frameNine = scoreBoard.frames[8];
      expect(frameNine.score()).toEqual(135);
    });

    it("frame 10 should have correct score", function() {
      frameTen = scoreBoard.frames[9];
      expect(frameTen.score()).toEqual(155);
    });
  });
});
