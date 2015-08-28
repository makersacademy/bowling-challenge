describe('game logic', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('gutter', function() {
      game.roll(0);
      expect(game.rolls[0]).toEqual(0);
  });

  it('can add normal scores', function() {
       game.roll(2);
       game.roll(2);
       expect(game.rolls[0] + game.rolls[1]).toEqual(4);
  });

});
