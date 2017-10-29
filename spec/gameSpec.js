describe('Game', function () {
  var game;

  beforeEach(function () {
    game = new Game();
  });

  it('starts with a score of zero', function() {
    expect(game.getScore()).toEqual(0)
  })
});