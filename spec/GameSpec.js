describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('each game', function() {

    it('starts with an empty frames array by default', function() {
      expect(game.showFrames()).toEqual([]);
    });

  });

  describe('score', function() {

    it('returns 0 for a gutter game', function() {
      var i;
      for (i = 0; i < 20; i++) {
          game.roll(0);
      }
      expect(game.finalScore()).toEqual(0);
    });

    it('returns the score for a game without any spares or strikes', function() {
      var i;
      for (i = 0; i < 20; i++) {
          game.roll(1);
      }
      expect(game.finalScore()).toEqual(20);
    });

  });

});
