describe ('game', function() {

  var game;

  beforeEach(function () {
    game = new Game();
  });

  describe ('for a gutter game', function() {
    it('returns 0', function() {
      for (let i = 0; i < 20; i++) {
        game.roll(0);
      }
      expect(game.gameover()).toEqual(0);
    });
  });

  describe ('one frame, no spares/strikes', function() {
    it('returns total of frame', function() {
      game.roll(3);
      game.roll(4);
      expect(game.total).toEqual(7);
    });
  });

});
