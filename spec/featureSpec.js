describe ('game', function() {

  var game;

  beforeEach(function () {
    game = new Game();
  });

  describe ('for a gutter game', function() {
    it('returns 0', function() {
      expect(game.gameover()).toEqual(0);
    });
  });

});
