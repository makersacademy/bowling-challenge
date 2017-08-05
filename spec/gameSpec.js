describe("Game", function () {
  var game;

  beforeEach(function () {
    game = new Game();
    game.setFrames();
  });

  it("should contain ten frames", function () {
    expect(game.frames.length).toEqual(10);
    game.frames.forEach(function (frame) {
      expect(frame instanceof Frame).toBeTruthy();
    });
  });
});
