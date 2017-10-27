describe("Bowling feature tests: ", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("#score:", function() {
    it('should have a score of 10 after a strike', function() {
      game.go(5);
      expect(game.score()).toEqual(5);
    });
  });
});
