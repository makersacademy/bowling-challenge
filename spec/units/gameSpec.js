describe("game.js", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe(".enterScore", function() {
    it("saves the scores in a hash", function() {
      game.enterScore(3);
      game.enterScore(5);
      console.log(game.scores);
      expect(game.scores[0]).toEqual(3);
      expect(game.scores[1]).toEqual(5);
    });
  });

  describe(".total", function() {
    it("returns the total score", function() {
      for (i = 0; i < 20; i++) {
        game.enterScore(2);
      }
      expect(game.totalScore).toEqual(40);
    });
  });
});
