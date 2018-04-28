describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('roll', function() {
    it('scores a game of all gutter balls', function() {
      for(var i = 0; i < 10; i++) {
        game.roll(0);
      }
      expect(game.score()).toEqual(0);
    })
  })
});
