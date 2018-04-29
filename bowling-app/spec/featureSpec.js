describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
    game.setupGame();
  });

  describe('roll', function() {
    it('scores a game of all gutter balls', function() {
      for(var i = 0; i < 20; i++) {
        game.play(0);
      }
      expect(game.score()).toEqual(0);
    });
    it('scores a perfect game', function() {
      for(var i = 0; i < 13; i++) {
        game.play(10);
      }
      expect(game.score()).toEqual(300);
    });
    it('scores a game of spares', function() {
      for(var i = 0; i < 21; i++) {
        game.play(5);
      }
      expect(game.score()).toEqual(150);
    });
  });
});