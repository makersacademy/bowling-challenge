describe("Bowling tests:", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("Unit tests: ", function() {
    it('should have a player', function() {
      expect(game.player()).not.toBeUndefined();
    });

    it('should have a score', function() {
      expect(game.score()).not.toBeUndefined();
    });
  });


});
