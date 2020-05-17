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
        frame.previousFrame = frames[i - 1];
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
      console.log(frames);
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
      console.log(frames);
      expect(scoreBoard.currentFrame.index).toEqual(1);
    });

    it("first frame should have score of 20", function() {
      expect(scoreBoard.frames[0].score()).toEqual(20);
    });
  });
});
