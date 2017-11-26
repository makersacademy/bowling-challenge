describe('Bowling Game', function() {
  beforeEach(function() {
    game = new BowlingGame();
  });

  it('can roll a gutter game', function() {
    rollMany(20, 0)
    expect(game.score()).toEqual(0);
  });
  it('roll all ones', function() {
    rollMany(20, 1)
    expect(game.score()).toEqual(20);
  });
  it('rolls a spare', function() {
    game.roll(5)
    game.roll(5)
    game.roll(5)
    rollMany(17, 0)
    expect(game.score()).toEqual(20)
  });
  it('roll a strike', function() {
    game.roll(10);
    game.roll(5)
    game.roll(3)
    rollMany(16,0)
    expect(game.score()).toEqual(26)
  })

  var rollMany = function (rolls, pins) {
    for (var i = 0; i < rolls; i++)  {
      game.roll(pins);
    }
  }
});
