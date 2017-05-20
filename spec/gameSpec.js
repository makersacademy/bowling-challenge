describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('has a default player name of Player 1 if no name is given', function() {
    expect(game.playerName).toBe('Player 1');
  });
  it('stores the player name if one is specified', function() {
    game = new Game('Simon');
    expect(game.playerName).toBe('Simon');
  });

});
