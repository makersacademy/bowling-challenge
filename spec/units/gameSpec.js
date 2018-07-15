describe("game.js", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe(".enterScore", function() {
    it("saves the scores in a hash", function() {
      game.enterScore(3);
      game.enterScore(5);
      expect(game.frames[0][0]).toEqual(3);
      expect(game.frames[0][1]).toEqual(5);
    });
  });

  describe(".returnScore", function() {
    it("returns the total score", function() {
      for (i = 0; i < 20; i++) {
        game.enterScore(2);
      }
      expect(game.returnScore()).toEqual(40);
    });
  });
});
