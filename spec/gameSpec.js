describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("scores a gutter game", function() {
    it("contains 10 frames", function() {
      expect(game.frames.length).toEqual(10);
    });

    it("registers a score", function() {
      game.bowl(0);
      expect(game.getTotalScore()).toEqual(0);
    })

    it("tracks the current frame", function() {
      spyOn(game.frames[0], "isComplete").and.returnValue(true);
      game.bowl(0);
      expect(game.getCurrentFrame()).toBe(game.frames[1]);
    });

  });

});
