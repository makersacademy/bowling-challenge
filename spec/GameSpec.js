describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game;
  });

  describe("No pins are hit - gutter game", function() {
    it("final score should be zero", function() {
      for (var i = 0; i <= 20; i++) {
        game.bowl();
      }
      expect(game.finalScore()).toEqual(0);
    });
  });
});