describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("#roll", function() {
    it("should increase the score", function() {
      game.roll(3);
      expect(game.score()).toEqual(3);
      game.roll(6);
      expect(game.score()).toEqual(9);
    });
    
  });
  describe("#score", function() {
    it("should add up the score of a whole game", function() {
      for (index = 0; index < 13; index++) {
        game.roll(10);
      };

      expect(game.score()).toEqual(300);
    });
  });
});
