describe("Game", function() {

  var game;
  var frame;

beforeEach (function() {
  game = new Game();
  frame = new Frame();
});

  it("starts with an empty array of frames", function() {
    expect(game.frames).toEqual([]);
  });

  describe("addFrame", function() {
    it("can add a frame to the frames array", function() {
      game.addFrame(frame);
      expect(game.frames).toEqual([frame]);
    });
  });
});
