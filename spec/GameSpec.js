

describe("Game", function() {
  var frame
  var game


  beforeEach(function() {
    frame = new Frame();
    game = new Game(frame);
    spyOn(Math, "floor").and.returnValue(5)

  });

  it("should start on frame 1", function() {
    expect(frame.frameNumber).toEqual(1)
  });

  it("should add scores for first frame of game", function(){
    frame.firstBowl()
    frame.secondBowl()
    game.updateScore()
    expect(game.score).toEqual(10)
  });
  it("moves to next frame after two rolls", function(){
    frame.firstBowl()
    frame.secondBowl()
    game.updateScore()
    expect(frame.frameNumber).toEqual(2)
  });
  it("should store each frame", function(){
    frame.firstBowl()
    frame.secondBowl()
    game.updateScore()
    expect(game.gameFrames).toContain(frame)
  });

})
