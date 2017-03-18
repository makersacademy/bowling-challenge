describe("Game", function() {

var game = new Game ()

  it("starts with a score of 0", function() {
    expect(game.score).toEqual(0);
  });

  it("starts on frame 1", function() {
    expect(game.frame).toEqual(1)
  });

  describe("tracks frame", function() {
    it("moves to the next frame", function() {
      game.nextFrame();
      expect(game.frame).toEqual(2)
    });
  });



});
