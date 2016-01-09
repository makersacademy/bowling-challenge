describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
    frame = new Frame()
  });

  describe("addFrame", function() {
    it("should add a frame to the current game", function() {
      game.addFrame(frame);
      expect(game._frames).toContain(frame);
    });
  });
});
