describe('roll', function() {

  var game;

  beforeEach(function() {
  game = new Game();
  });

    it('allows the player to roll and knock over a random number of pins', function() {
      spyOn(game, '_calculateRoll').and.returnValue(4);
      game.roll();
      expect(game.pins).toEqual(6);
    });
});
