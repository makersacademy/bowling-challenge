describe ('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it ('calculates a gutter game', function() {
    game.roll(0)
    expect(game.score()).toEqual(0);
  })
});
