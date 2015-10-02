describe ('Game', function() {

  beforeEach(function() {
    game = new Game();
  });

  it ('starts with 0 scores', function() {
    expect(game.total).toBe(0);
  });

  it ('sums the scores', function() {
    game.countFallenPins(8);
    expect(game.total).toBe(8);
  });
});
