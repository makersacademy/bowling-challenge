describe("Game", function() {
  var frame
  var game


  beforeEach(function() {
    frame = new Frame();
    game = new Game(frame);
    spyOn(Math, "floor").and.returnValue(5)

  });

  it("Starts on frame 1", function() {
    expect(frame.frameNumber).toEqual(1)
  });

  it("Scores get added after every frame", function(){
    frame.firstBowl()
    frame.secondBowl()
    game.updateScore()
    expect(game.score).toEqual(10)
  });
  it("Moves to next frame after two turns", function(){
    frame.firstBowl()
    frame.secondBowl()
    game.updateScore()
    expect(frame.frameNumber).toEqual(2)
  });
  it("Stores the score of each frame", function(){
    frame.firstBowl()
    frame.secondBowl()
    game.updateScore()
    expect(game.gameFrames).toContain(frame)
  });

})
