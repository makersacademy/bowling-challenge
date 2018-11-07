describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('starts a game at frame 1', function() {
    expect(game.frame).toEqual(1);
  });

  it('starts a game at bowl 1', function() {
    expect(game.currentbowl).toEqual(1);
  });

});
