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

  describe('getCurrentFrame', function() {
    it('displays the players current Frame.', function() {
      expect(game.getCurrentFrame()).toEqual(1);
    });
  });

  describe('getCurrentRoll', function() {
    it('displays the players current Roll.', function() {
      expect(game.getCurrentRoll()).toEqual(1);
    });
  });

  describe('roll', function() {
    it('adds the points of each roll to the total', function() {
      game.roll(1);
      expect(game.getCurrentScore()).toEqual(1);
    });
  });

  describe('endTurn', function() {
    it('changes the turn', function() {
      for (i=0; i < 5; i++) {
        game.endTurn();
      }
      expect(game.getCurrentFrame()).toEqual(3);
      expect(game.getCurrentRoll()).toEqual(2);
    });
  });
});
