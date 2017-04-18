
describe('Game', function () {

  beforeEach(function () {
    game = new Game;
  });

  it('should score a gutter game', function () {
    for (i = 0; i < 20; i += 1) {
      game.roll(0);
    };

    expect(game.score()).toEqual(0);
  });

  it('should score a game of ones', function () {
    for (i = 0; i < 20; i += 1) {
      game.roll(1);
    };

    expect(game.score()).toEqual(20);
  });

  it('should score a spare', function () {
    game.roll(7);
    game.roll(3);
    game.roll(4);
    expect(game.score()).toEqual(18);
  });

  it('should score a strike', function () {
    game.roll(10);
    game.roll(3);
    game.roll(4);
    expect(game.score()).toEqual(24);
  });

  it('should score 300 - a perfect game including bonuses', function () {
    for (i = 0; i < 12; i += 1) {
      game.roll(10);
    }

    expect(game.score()).toEqual(300);
  });

});
