describe('Bowling Game', function() {
  it('can roll a gutter game', function() {
    var game = new BowlingGame();
    for (var i = 0; i < 20; i++)  {
      game.roll(0);
    }
    expect(game.score()).toEqual(0);
  });
});
