describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('roll', function() {
    it('records rolls and updates the current roll#', function() {
       game.roll(6);
       game.roll(3);
       expect(game.getScoreCard()).toEqual([{frame: 1, roll: 1, pins: 6}, {frame: 1, roll: 2, pins: 3}]);
       expect(game.getCurrentFrame()).toEqual(2);
       expect(game.getCurrentRoll()).toEqual(1);
    });
  });
});
