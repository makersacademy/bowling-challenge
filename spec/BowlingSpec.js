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

  it("can know the score of a the current game", function(){
    bowlingGame.roll(1);
    expect(bowlingGame.score()).toEqual(1);
  });

  it("the first frame is  over when first roll strike", function() {
    bowlingGame.roll(10);
    expect(bowlingGame.gameFrames[0].isOver()).toEqual(true);
  });

  it("the second frame is over when first two rolls are strikes", function() {
    bowlingGame.roll(10);
    bowlingGame.roll(10);
    expect(bowlingGame.gameFrames[1].isOver()).toEqual(true);
  });

  it("the second frame is over when first two rolls are strikes", function() {
    bowlingGame.roll(10);
    bowlingGame.roll(5);
    bowlingGame.roll(2);
    expect(bowlingGame.score()).toEqual(24);
  });
})
