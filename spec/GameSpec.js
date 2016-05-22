describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  function rollGame(rolls, pins) {
    for(var i = 0; i < rolls; i++) {
      game.roll(pins)
    }
  }

  it('can roll a gutter game', function() {
    rollGame(20, 0)
    expect(game.points()).toEqual(0)
  });

  it('can roll a normal game', function() {
    rollGame(20, 4)
    expect(game.points()).toEqual(80)
  });

  it('can roll a spare', function() {
    game.roll(4)
    game.roll(6)
    game.roll(8)
    rollGame(18, 0)
    expect(game.points()).toEqual(26)
  });

  it('can roll a strike', function() {
    game.roll(10);
    game.roll(5);
    game.roll(4);
    rollGame(16, 0);
    expect(game.points()).toEqual(28)
  });

  it('can roll a perfect game', function() {
    rollGame(20, 10)
    expect(game.points()).toEqual(300)
  });
});
