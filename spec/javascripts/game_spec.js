describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('starts a game at frame 1', function() {
    expect(game.frame).toEqual(1);
  });

  it('starts a game at roll 1', function() {
    expect(game.currentRoll).toEqual(1);
  });
});
