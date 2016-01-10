describe("UserStories", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  // initializes with 0 no frames completed
  it("starts out with 0 frames completed", function(){
    expect(game.frames).toEqual([]);
  });

  // allows me to play a frame
  it("allows me to play a frame", function(){
    game.playFrame();
    expect(game.frames).toEqual([new Frame]);
  });
});
