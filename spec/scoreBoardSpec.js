describe("ScoreBoard", function() {

  var scoreBoard;

  beforeEach(function() {
    scoreBoard = new ScoreBoard(10);
  });

  it("has a certain number of frames", function() {
    expect(scoreBoard.frames.length).toEqual(10);
  });

  it("scores 0 for a single frame with two gutterballs", function() {
    var smallScoreBoard = new ScoreBoard(1);
    smallScoreBoard.roll(0);
    smallScoreBoard.roll(0);

    expect(smallScoreBoard.score).toEqual(0);
  });

  it("scores 1 for a single frame with one pin and a gutterball", function() {
    var smallScoreBoard = new ScoreBoard(1);
    smallScoreBoard.roll(1);
    smallScoreBoard.roll(0);

    expect(smallScoreBoard.score).toEqual(1);
  });

  it("knows when there has been a strike on a single frame", function() {
    var smallScoreBoard = new ScoreBoard(1);
    smallScoreBoard.roll(10);

    var frame1 = smallScoreBoard.getFrame(1);
    expect(frame1.checkStrike()).toBe(true);
  });

  it("knows that a frame is over after a strike", function() {
    var slightlyLargerScoreBoard = new ScoreBoard(2);
    slightlyLargerScoreBoard.roll(10);

    expect(slightlyLargerScoreBoard.currentFrame).toEqual(1);
  });

  it("gives a bonus for a strike", function() {
    var smallScoreBoard = new ScoreBoard(2);
    smallScoreBoard.roll(10);
    smallScoreBoard.roll(2);
    smallScoreBoard.roll(4);

    expect(smallScoreBoard.score).toEqual(22);
  });
});
