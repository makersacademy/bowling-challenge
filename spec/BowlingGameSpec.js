describe('The Bowling Game', function() {
  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  var rollManyTimes = function (pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  };

  it('can roll a gutter game', function() {
    rollManyTimes(0, 20);
    expect(game.score()).toEqual(0);
  });

  it('can roll all ones', function() {
    rollManyTimes(1, 20);
    expect(game.score()).toEqual(20);
  });

  it('can roll a spare', function() {
    game.roll(5);
    game.roll(5);
    game.roll(3);
    rollManyTimes(0, 17);
    expect(game.score()).toEqual(16);
  });

  it('can roll a strike', function() {
    game.roll(10);
    game.roll(4);
    game.roll(3);
    rollManyTimes(0, 16);
    expect(game.score()).toEqual(24);
  });




});
