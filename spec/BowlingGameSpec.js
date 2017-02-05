describe('The Bowling Game', function() {

  it('can roll a gutter game', function() {
    var game;
    game = new BowlingGame();
    for (var i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual(0);
  });

  it('can roll all ones', function() {
    var game = new BowlingGame();
    for (var i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.score()).toEqual(20);
  });

});
