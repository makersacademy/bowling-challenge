describe("Game", function() {
  var game;
  var frame;

  beforeEach(function() {
    function FrameTest() {
    }
    frame = new FrameTest()
    game = new Game(frame);
  });

  it("scores 0 for a gutter game", function() {
    game.bowl(0, 20);
    expect(game.score).toEqual(0);
  });

  it("starts a new game with the first frame in the frames array", function() {
    expect(game.frames).toContain(frame);
  });

  it("starts with a frame index of 1", function() {
    expect(game.frameIndex).toEqual(1);
  });
});
