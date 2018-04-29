describe("Game", function() {
  var game;
  var frame = Frame;

  beforeEach(function() {
    game = new Game();
    game.setupGame(Frame);
  });

  function autoRoll(score, times) {
    for(var i = 0; i < times; i++) {
      game.play(score);
    }
  }

  describe('play', function() {
    it('scores a game of all gutter balls', function() {
      autoRoll(0, 20);
      expect(game.score()).toEqual(0);
    });
    it('scores a perfect game', function() {
      autoRoll(10, 12);
      expect(game.score()).toEqual(300);
    });
    it('scores a game of spares', function() {
      autoRoll(5, 21);
      expect(game.score()).toEqual(150);
    });
    it('scores a game of numbers', function() {
      autoRoll(5, 4);
      autoRoll(3, 4);
      autoRoll(5, 4);
      autoRoll(3, 4);
      autoRoll(10, 3);
      autoRoll(1, 1);
      expect(game.score()).toEqual(131);
    });
    it('scores another game of numbers', function() {
      autoRoll(7, 1);
      autoRoll(2, 3);
      autoRoll(5, 2);
      autoRoll(10, 4);
      autoRoll(5, 3);
      autoRoll(1, 1);
      autoRoll(5, 2);
      autoRoll(10, 1);
      expect(game.score()).toEqual(179);
    });
  });
});