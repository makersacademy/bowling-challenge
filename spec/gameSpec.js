describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();

  });

  describe("score", function() {
    it("scores gutter game", function() {
      for (var i = 0; i < 20; i++) {
        game.roll(0);
      }
      expect(game.score).toEqual(0);
    });

    it("scores a game where 1 pin is knocked in each roll", function() {
      for (var i = 0; i < 20; i++) {
        game.roll(1);
      }
      expect(game.score).toEqual(20)
      })
    });

});
