describe("ScoreBoard", function() {
  var scoreBoard;
  var frames = [];

  beforeEach(function() {
    frames = [];
    for (var i = 0; i < 10; i++) {
      frames.push(new Frame(i));
    };

    for (var i = 0; i < 10; i++) {
      frame = frames[i];
      if (i == 0) {
        frame.nextFrame = frames[i + 1];
      } else if (i == 9) {
        frame.prevFrame = frames[i - 1];
      } else {
        frame.nextFrame = frames[i + 1];
        frame.prevFrame = frames[i - 1];
      };
    };
    scoreBoard = new ScoreBoard(frames);
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
      console.log(scoreBoard);
      expect(scoreBoard.currentFrame.index).toEqual(9)
    });

    it("frame 1 should have correct score", function() {
      frameOne = frames[0];
      expect(frameOne.score()).toEqual(5);
    });

    it("frame 2 should have correct score", function() {
      frameTwo = frames[1];
      expect(frameTwo.score()).toEqual(25);
    });

    it("frame 3 should have correct score", function() {
      frameThree = frames[2];
      expect(frameThree.score()).toEqual(47);
    });

    it("frame 8 should have correct score", function() {
      frameEight = frames[7];
      expect(frameEight.score()).toEqual(115);
    });

    it("frame 9 should have correct score", function() {
      frameNine = frames[8];
      expect(frameNine.score()).toEqual(135);
    });

    it("frame 10 should have correct score", function() {
      frameTen = frames[9];
      expect(frameTen.score()).toEqual(155);
    });
  });
});
