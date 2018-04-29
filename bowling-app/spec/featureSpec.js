describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
    game.setupGame();
  });

  function autoRoll(score, times) {
    for(var i = 0; i < times; i++) {
      game.play(score);
    };
  };

  describe('roll', function() {
    it('scores a game of all gutter balls', function() {
      autoRoll(0, 20)
      expect(game.score()).toEqual(0);
    });
    it('scores a perfect game', function() {
      autoRoll(10, 12)
      expect(game.score()).toEqual(300);
    });
    it('scores a game of spares', function() {
      autoRoll(5, 21)
      expect(game.score()).toEqual(150);
    });
  });
});