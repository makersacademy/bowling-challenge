describe('Bowling Challenge', function() {
  
  it('creates a game', function() {
    var game = new BowlingGame();
  });

  it('rolls gutter game', function() {
    var game = new BowlingGame();
    for (var i = 0; i < 20; i++) {
        game.roll(0);
    }
    expect(game.score()).toBe(0);
  });

  it('can roll a strike', function () {
    var game = new BowlingGame();
    for (var i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.score()).toBe(20);
  });
});