describe("Bowling", function() {

  var gameFrames;
  var gameFramesCount;

  beforeEach( function() {
  gameFramesCount = 2;
  bowlingGame = new Bowling(Frame, gameFramesCount);
  });

  it("each game begins with n frames", function() {
    expect(bowlingGame.gameFrames.length).toEqual(2);
  });

  it("the first frame is not over", function() {
    expect(bowlingGame.gameFrames[0].isOver()).toEqual(false);
  });

})
