describe("ScoreBoard", function() {
  var scoreBoard;

  beforeEach(function() {
    frames = [];
    for (i = 1; i <= 10; i++){
      frames.push(new Frame(i));
    };

    scoreBoard = new ScoreBoard(frames);
  });

  it("should have frames", function() {
    expect(scoreBoard.frames[0]).toBeInstanceOf(Frame);
  });
});
