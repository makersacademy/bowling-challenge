describe("Game", function() {
  var game;
  var newFrame;

  beforeEach(function() {
    game = new Game();
  });

  it("Can create a game class", function() {
    expect(game instanceof Game).toBe(true);
  });

  it("Can create a new frame object", function() {
    newFrame = game.addFrame(0,0)
    expect(newFrame instanceof Frame).toBe(true)
  })

  it ("Can return the array of frames played", function() {
    game.frames = ["cat"]
    expect(game.getFrames()).toEqual(["cat"])
  })
})