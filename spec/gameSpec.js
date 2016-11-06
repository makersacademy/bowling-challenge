describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('starts with a current score of zero', function() {
    expect(game.currentScore()).toEqual(0);
  });
});
