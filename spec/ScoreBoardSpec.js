describe("ScoreBoard", function() {
  var scoreBoard;

  beforeEach(function() {
    frames = [];
    for (i = 0; i < 10; i++){
      frames.push(new Frame(i));
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
});
