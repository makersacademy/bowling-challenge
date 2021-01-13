describe ('game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('gameover', function() {
    it('returns the total score', function() {
      expect(game.gameover()).toEqual(game.score)
    });
  });

});
