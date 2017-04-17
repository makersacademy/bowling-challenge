describe("Game", function(){
  var game;
  beforeEach(function(){
    game = new Game()
    });

  it("initializes with all frames as empty", function() {
    expect(game.allFrames).toEqual([]);
  });

  it("initializes with an empty current frame", function() {
    expect(game.currentFrame.frameScores).toEqual([]);
  });
});
