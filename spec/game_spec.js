describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('getCurrentScore', function() {
    it('displays the players current score.', function() {
      expect(game.getCurrentScore()).toEqual(0);
    });
  });

  describe('roll', function() {
    it('adds the points of each roll to the total', function() {
      game.roll(1);
      expect(game.getCurrentScore()).toEqual(1);
    });
  });
});
